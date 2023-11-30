import { useState } from "react";

const Counter = ({ description, defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div className="text-body-secondary py-3 my-4 border-top">
      <h3 className="mb-3 px-3">{description}</h3>
      <div className="row mx-3 d-flex align-items-center justify-content-evenly ">
        <div className="col-1 mb-3 px-3">
          <label className="form-label">
            Incremento:
            <input
              data-testid="input"
              value={incrementor}
              className="form-control form-control-sm"
              onChange={(evt) => {
                setIncrementor(parseInt(evt.target.value));
              }}
              type="text"
            />
          </label>
        </div>
        <div className="col-11 d-flex gap-2">
          <button
            className="btn btn-primary btn-sm"
            aria-label="subtrair número"
            onClick={() => setCount(count - incrementor)}
          >
            -
          </button>
          <button
            className="btn btn-primary btn-sm ml-3"
            aria-label="adicionar número"
            onClick={() => setCount(count + incrementor)}
          >
            +
          </button>
        </div>
        <h4 className="mt-1"> Contagem atual: {count}</h4>
      </div>
    </div>
  );
};

export default Counter;
