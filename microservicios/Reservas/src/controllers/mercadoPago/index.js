require("dotenv").config();
const mercadopago = require('mercadopago');
const PROD_ACCESS_TOKEN = process.env.PROD_ACCESS_TOKEN;
const URL_BACK_PAGO = process.env.URL_BACK_PAGO;
mercadopago.configure({
    sandbox: true,
    access_token: PROD_ACCESS_TOKEN,
});

function mercadoPago({ _id, monto, descripcion }) {

    return new Promise((resolve, reject) => {
        const preference = {
            items: [
                {
                    title: descripcion,
                    unit_price: parseFloat(monto),
                    quantity: 1,
                }
            ],
            back_urls: {
                success: `${URL_BACK_PAGO}/cobrado`,
                failure: `${URL_BACK_PAGO}/pendiente`,
                pending: `${URL_BACK_PAGO}/fallado`
            },
            auto_return: "approved",
        };

        mercadopago.preferences.create(preference)
            .then((result) => {
                resolve({init_point:result.body.init_point,id:result.body.id});
            })
            .catch((error) => {
                reject(new Error("Error en la creacion del init_point de Mercado Pago"));
            });
    });
}

module.exports = { mercadoPago };
