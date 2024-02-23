import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './asserts/powered.png';
import leftArrowImage from './asserts/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setShowItem] = useState<Level | null>(null);
  
  function handleCalculateButton() {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos")
    }
  }

  function handleBackButton() {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width={150}></img>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calucule seu IMC.</h1>
          <p>
            IMC é a sigla para Indice de massa corpórea, parametro adotado
            pela Organização mudial de saude para calcular o peso ideal 
            de cada pessoa.
          </p>
          <input 
            type='number' 
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input 
            type='number' 
            placeholder='Digite o seu peso. Ex: 75.5 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          { !toShow && <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          { toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt='' width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
