// import './App.css';
import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { encode, decode } from 'js-base64';


function App() {
  const [useData, setData] = useState({
    nombre: null,
    cedula: null,
    celular: null,
    protocol: null,
    correo: null,
    horashows: null,
    asiento: null,
    categoria: null,
    lugar: null,
    fecha: null,
    telefono: null,
    vendedor: null,
    actual: null,
    valorpagado: null,
    formadepago: null,
    transaccion: null,
    urlindex: null,
    barracategoria: null,
  });

  useEffect(() => {
    console.log(window.location.search);
    console.log(decode(window.location.search));
    // setData(JSON.parse(decode(window.location.search)))
  }, []);
  return (
    <div className="App">
      <table width="200" border="0" align="center" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td>
              <img src={useData.urlindex !== "" && useData.urlindex != null ? useData.urlindex : "https://codigomarret.online/img/encabezado.jpeg"} width="616" height="165" alt="" />
            </td>
          </tr>
          <tr>
            <td height="5">&nbsp;</td>
          </tr>
          <tr>
            <td>
              <table width="617" border="0" cellspacing="15" cellpadding="0">
                <tbody>
                  <tr align="justify">
                    <td width="587">
                      <p>NOMBRE </p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.nombre != null ? useData.nombre : "N/A"}</strong></p>

                      <p>IDENTIFICACION </p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.cedula != null ? useData.cedula : "N/A"}</strong></p>
                    </td>
                  </tr>
                  <tr style={{ align: "justify" }}>
                    <th style={{ width: "150px" }}>
                      <p style={{ fontWeight: "normal" }}>CATEGORIA</p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.barracategoria != null ? useData.barracategoria : "N/A"}</strong></p>
                    </th>
                    <th style={{ width: "150px" }}>
                      <p style={{ fontWeight: "normal" }}>HORA</p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.actual != null ? useData.actual : "N/A"}</strong></p>
                    </th>
                    <th style={{ width: "150px" }}>
                      <p style={{ fontWeight: "normal" }}>ASIENTO</p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.asiento != null ? useData.asiento : "N/A"}</strong></p>
                    </th>
                  </tr>

                  <tr style={{ align: "center" }}>
                    <td align="left">
                      <p>LUGAR</p>
                      <p style={{ marginTop: "-10px" }}><strong>RECINTO FERIAL, DURAN</strong></p>
                      <p>FECHA</p>
                      <p style={{ marginTop: "-10px" }}><strong>{useData.fecha != null ? useData.fecha : "N/A"}</strong></p>
                    </td>
                    <td style={{ align: "center" }}>
                      <ol>
                        <li>
                          <QRCode value={`${useData.nombre}-${useData.cedula}-${useData.celular}-${useData.protocol}-${useData.actual}`} />
                        </li>
                      </ol>
                    </td>
                  </tr>

                </tbody>
              </table>

              {/* GENERAL */}
              {

                useData.barracategoria === "GENERAL" ? (
                  <div style={{ width: "100%", padding: "15px", height: "5%" }}>
                    <img src="https://codigomarret.online/img/general.png" alt="all" width="100%" />
                  </div>
                ) : ""
              }

              {/* TRIBUNA */}
              {
                useData.barracategoria !== "TRIBUNA" ? (
                  <div style={{ width: "100%", padding: "15px", height: "5%" }}>
                    <img src="https://codigomarret.online/img/tribuna.png" alt="all" width="100%" />
                  </div>
                ) : ""
              }

              {/* PALCO */}
              {
                 useData.barracategoria === "PALCO" ? (
                <div style={{ width: "100%", padding: "15px", height: "5%" }}>
                  <img src="https://codigomarret.online/img/palco.png" alt="all" width="100%" />
                </div>
              ) : ""
              }
              {/* CANCHA */}
              {
                useData.barracategoria === "CANCHA" ? (
                  <div style={{ width: "100%", padding: "15px", height: "5%" }}>
                    <img src="https://codigomarret.online/img/cancha.png" alt="all" width="100%" />
                  </div>
                ) : ""
              }

              {
                useData.barracategoria === "" ? (
                  <div style={{ width: "100%", padding: "15px", height: "5%" }}>
                     <img src="https://codigomarret.online/img/sin.png" alt="all" width="100%" />
                  </div>
                ) : ""
              }
            </td>




          </tr>

          <tr>
            <td height="10">&nbsp;</td>
          </tr>

          <tr>
            <td>
              <table width="617" border="0" cellspacing="15" cellpadding="0">
                <tbody>
                  <tr>
                    <td width="617"><strong>PARA CANJEAR BOLETO DURO</strong>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><span><img src="https://codigomarret.online/img/comprobado.png" height="15px" alt="" /></span> Presentar este documento
                          impreso</li>
                        <li><span><img src="https://codigomarret.online/img/comprobado.png" height="15px" alt="" /></span> Copia de cédula del titular del
                          ticket</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td width="587"><strong>PROHIBIDO</strong>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><span><img src="https://codigomarret.online/img/prohibido.png" height="15px" alt="" /></span> Ingreso de bebidas alcohólicas
                        </li>
                        <li><span><img src="https://codigomarret.online/img/prohibido.png" height="15px" alt="" /></span> Ingreso de armas blancas y de
                          fuego</li>
                        <li><span><img src="https://codigomarret.online/img/prohibido.png" height="15px" alt="" /></span> Ingreso de alimentos perecibles
                        </li>
                        <li><span><img src="https://codigomarret.online/img/prohibido.png" height="15px" alt="" /></span> Ingreso de mascotas</li>
                      </ul>
                    </td>

                    <td width="587"><strong>NORMAS DE BIOSEGURIDAD</strong>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><span><img src="https://codigomarret.online/img/mascarilla.png" height="15px" alt="" /></span> Utilice mascarilla</li>
                        <li><span><img src="https://codigomarret.online/img/distanciamiento-social.png" height="15px" alt="" /></span> Distanciamento de
                          1.5m</li>
                        <li><span><img src="https://codigomarret.online/img/tarjeta-de-identificacion.png" height="15px" alt="" /></span> Presentar carnet
                          de vacunación <strong>covid-19</strong></li>
                        <li><span><img src="https://codigomarret.online/img/alcohol.png" height="15px" alt="" /></span> Utilice desinfectante personal
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <p>&nbsp;</p>
    </div>
  );
}

export default App;
