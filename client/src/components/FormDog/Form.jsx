import Creator from "../Creator/Creator";
import { ErrorHeingth, Errorweight } from "../CreateDogs/validation";
import styles from "./Form.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../image/collie-de-frontera.png";

const FormDog = ({
  SubmitHandle,
  onChange,
  FuncionDelete,
  onChageWeightMax,
  onChageWeightMin,
  onChageHeigthMax,
  onChageHeigthMin,
  Form,
  Temperaments,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  Error,
}) => {
  return (
    <div className={styles.divPadre}>
      <div className={styles.divLink1}>
        <img className={styles.imagen} src={image} />
        <p className={styles.p}>Dogs Form</p>
        <div className={styles.divLink}>
          <Link className={styles.Link} to="/HomePage">
            Home
          </Link>
        </div>
      </div>
      <div className={styles.div}>
        <form onSubmit={SubmitHandle}>
          {/*-------------------------------NOMBRE---------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="name">Name: </label>
            <input
              className={styles.input}
              value={Form.name}
              name="name"
              type="text"
              onChange={onChange}
              placeholder="Write the name of the dog."
            />
            <span className={styles.span}>{Error.name}</span>
          </div>
          {/*-------------------------------ALTURA---------------------------*/}
          <div className={styles.divInput}>
            <label>
              Height:
              <label htmlFor="heightMin">
                <input
                  className={styles.input2}
                  value={heightMin}
                  name="heightMin"
                  type="number"
                  onChange={onChageHeigthMin}
                  min={0}
                />
                Min
              </label>
              <label htmlFor="heightMax">
                <input
                  className={styles.input2}
                  name="heightMax"
                  value={heightMax}
                  type="number"
                  onChange={onChageHeigthMax}
                  min={0}
                />
                Max
              </label>
            </label>
            <span className={styles.span}>
              {ErrorHeingth(heightMin, heightMax)}
            </span>
          </div>
          {/*-----------------------------PESO-----------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="weight">
              Weight:
              <label htmlFor="weightMin">
                <input
                  className={styles.input2}
                  name="weightMin"
                  value={weightMin}
                  type="number"
                  onChange={onChageWeightMin}
                  min={0}
                />
                Min
              </label>
              <label htmlFor="weightMax">
                <input
                  className={styles.input2}
                  name="weightMax"
                  value={weightMax}
                  type="number"
                  onChange={onChageWeightMax}
                  min={0}
                />
                Max
              </label>
            </label>
            <span className={styles.span}>
              {Errorweight(weightMin, weightMax)}
            </span>
          </div>
          {/*----------------------------LIFE------------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="life_span">Life_span:</label>
            <input
              className={styles.input}
              name="life_span"
              value={Form.life_span}
              type="number"
              onChange={onChange}
              min={0}
            />
            <span className={styles.span}>{Error.life_span}</span>
          </div>
          {/*--------------------------IMAGEN--------------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="image">Image:</label>
            <input
              className={styles.input}
              name="image"
              value={Form.image}
              type="text"
              onChange={onChange}
              placeholder="Type the URL of the image."
            />
            <span className={styles.span}>{Error.image}</span>
          </div>
          {/*--------------------------Temperaments------------------------------*/}
          <select
            className={styles.selects}
            name="temperament"
            onChange={onChange}
          >
            <option value="" selected>
              Select a Temperament
            </option>
            {Temperaments?.map((temp) => {
              return <option value={temp.name}>{temp.name}</option>;
            })}
          </select>
          <hr />
          <div className={styles.Selecccion}>
            <div className={styles.container}>
              {Form.temperament?.map((temp) => (
                <div className={styles.div4}>
                  <button
                    className={styles.button}
                    onClick={() => FuncionDelete(temp[1])} //  [[1, temp]]
                  >
                    X
                  </button>
                  <p>{temp[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <button className={styles.Boton} type="submit">
            Submit
          </button>
        </form>
      </div>
      <Creator />
    </div>
  );
};

export default FormDog;
