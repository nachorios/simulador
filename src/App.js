import React, { useState, useEffect } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

export default function App() {
  const [total, setTotal] = useState(0);
  const [mont, setMont] = useState(5000);
  const [time, setTime] = useState(3);
  const int = 0.9798;

  const marksTime = {
    3: <strong>3</strong>,

    24: <strong>24</strong>,
  };
  const marksMont = {
    5000: <strong>5000</strong>,

    50000: <strong>50000</strong>,
  };

  const credit = () => {
    console.log("obtener credito");
  };

  const det = () => {
    console.log("detalle");
  };

  useEffect(() => {
    const totalInt = mont * int;
    const totalMont = mont + totalInt;
    const toPay = totalMont / time;

    setTotal(toPay.toFixed(2));
  });

  return (
    <div style={styles.main}>
      <div style={styles.div}>
        <b style={styles.title}>Simula tu credito</b>

        <div class="row">
          <p>Monto total</p>
          <b style={styles.inputMont}>${mont}</b>
        </div>

        <Slider
          min={5000}
          max={50000}
          value={mont}
          onChange={(e) => setMont(e)}
          railStyle={styles.railStyle}
          handleStyle={styles.handleStyle}
          trackStyle={styles.trackStyle}
          marks={marksMont}
        />
        <br></br>
        <div class="row">
          <p>Plazo</p>
          <b style={styles.input}>{time}</b>
        </div>
        <Slider
          min={3}
          max={24}
          value={time}
          onChange={(e) => setTime(e)}
          railStyle={styles.railStyle}
          handleStyle={styles.handleStyle}
          trackStyle={styles.trackStyle}
          marks={marksTime}
        />
        <br></br>
        <div class="row">
          <p>Cuota fija por mes</p>
          <b style={styles.inputCuota}>${total}</b>
        </div>
        <div class="row">
          <button type="button" class="btn btn-primary btn-lg" onClick={credit}>
            Obtene credito
          </button>

          <button type="button" class="btn btn-secondary btn-sm" onClick={det}>
            Ver detalle de cuotas
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  div: {
    margin: 50,
    width: 300,
    background: "#3349ff",
    fontSize: 20,
    fontWeight: "400",
  },
  main: {
    background: "#3349ff",
    margin: 60,
    width: 400,
    border: "4px solid blue",
    borderRadius: "5px",
    color: "white",
  },
  title: {
    marginLeft: 70,
  },
  handleStyle: {
    height: 12,
    width: 12,
    marginLeft: 1,
    marginTop: -6,
    backgroundColor: "white",
    border: 0,
  },
  railStyle: {
    height: 2,
  },
  trackStyle: {
    background: "none",
  },
  input: {
    marginLeft: 250,
  },
  inputCuota: {
    marginLeft: 70,
  },
  inputMont: {
    marginLeft: 150,
  },
};
