/**
 * SERVIDOR DE PRUEBAS LOCAL PARA DROPI
 * 
 * Este script recibe los pedidos de tu landing page y los envía directamente a Dropi
 * usando la integración APIFY.
 */

const http = require('http');

// Configuración de Dropi
const DROPI_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcHAuZHJvcGkuY286ODAiLCJpYXQiOjE3NzU2NjA2MDIsImV4cCI6NDkzMTMzNDIwMiwibmJmIjoxNzc1NjYwNjAyLCJqdGkiOiJNMlZjZ0xXa2xvQTRnM2RwIiwic3ViIjo0OTIwMjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEiLCJhdWQiOiJBUElGWSIsInRva2VuX3R5cGUiOiJJTlRFR1JBVElPTlMiLCJ3Yl9pZCI6MSwiaW50ZWdyYXRpb25fdHlwZSI6IkFQSUZZIiwiaW50ZWdyYXRpb25fdHlwZV9pZCI6NDUzLCJpcF91cmwiOlt7InVybCI6InRhbWJvcmEuY28iLCJpcCI6bnVsbH0seyJ1cmwiOm51bGwsImlwIjoiNjcuMjMuMjUzLjI1MCJ9XSwiaW50ZWdyYXRpb25fdXJsIjoiIn0.BvIcgjbCzfyflxH445MxN-LKTwAZ7Qt3BUhyngln1yI";

const server = http.createServer(async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/orders') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const orderData = JSON.parse(body);
        console.log("\n📦 NUEVO PEDIDO RECIBIDO EN LOCAL:");
        console.log("-----------------------------------");
        console.log(`Cliente: ${orderData.fullName}`);
        console.log(`Producto: ${orderData.bundleTitle}`);
        console.log(`Dropi ID: ${orderData.variantId}`);
        console.log(`Ciudad: ${orderData.city}`);
        console.log("-----------------------------------");

        // Construir el Payload para Dropi
        const dropiPayload = {
          // El token se suele enviar en el Header, pero algunas versiones de la API lo aceptan en el body
          token: DROPI_TOKEN,
          sale_value: orderData.price,
          customer: {
            name: orderData.fullName,
            phone: orderData.phone,
            email: orderData.email || "no-email@example.com",
            address: orderData.address,
            city: orderData.city,
            department: orderData.department
          },
          products: [
            {
              id: orderData.variantId,
              quantity: orderData.bundleTitle.toUpperCase().includes('X2') ? 2 : 1
            }
          ],
          payment_method: 1 // 1 suele ser Pago Contra Entrega en Dropi
        };

        const endpoints = [
          'https://api.dropi.co/v2/orders',
          'https://api.dropi.co/v1/orders',
          'https://app.dropi.co/api/orders/create'
        ];

        let successResult = null;
        let lastError = null;

        for (const url of endpoints) {
          console.log(`🚀 Probando endpoint: ${url}`);
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DROPI_TOKEN}`
              },
              body: JSON.stringify(dropiPayload)
            });

            const rawText = await response.text();
            console.log(`📥 Respuesta RAW de ${url}:`, rawText.substring(0, 500));

            try {
              const result = JSON.parse(rawText);
              if (result.success || result.status === 'success' || result.id || response.ok) {
                console.log(`✅ ¡ÉXITO en endpoint ${url}!`);
                successResult = result;
                break;
              } else {
                lastError = result.message || "Error en JSON";
              }
            } catch (e) {
              lastError = "Respuesta no es JSON";
            }
          } catch (err) {
            console.error(`❌ Fallo crítico en ${url}:`, err.message);
            lastError = err.message;
          }
        }

        if (successResult) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, dropi_id: successResult.id || 'N/A', debug: successResult }));
        } else {
          console.log("❌ NINGÚN ENDPOINT FUNCIONÓ");
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: "Ningún endpoint de Dropi aceptó la petición.", details: lastError }));
        }

      } catch (err) {
        console.error("💥 ERROR CRÍTICO:", err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: "Error interno en el servidor de pruebas" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 SERVIDOR DE PRUEBAS DROPI CORRIENDO`);
  console.log(`📍 URL: http://localhost:${PORT}/api/orders`);
  console.log(`🔌 Esperando pedidos de la landing page...`);
  console.log(`=================================================\n`);
});
