import { useState, useEffect } from "react";

const Lists = () => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newWord || words.includes(newWord)) return;

    setWords([...words, newWord]);
    setNewWord("");
  };

  const handleDelete = (text) => {
    const result = words.filter((item) => item !== text);
    setWords(result);
  };

  useEffect(() => {
    if (newWord.length > 2) setDisabled(false);
    else setDisabled(true);
  }, [newWord]);

  return (
    <div className="text-body-secondary py-3 my-5 border-top">
      <h3 className="mb-3 px-3">Lista de Tarefas</h3>
      <form
        className="container mb-4"
        data-testid="form-add"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-10">
            <input
              className="form-control"
              data-testid="input"
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
            />
          </div>
          <div className="col-2 d-grid">
            <button
              disabled={disabled}
              className="btn btn-primary btn"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <ul className="list-group" data-testid="ul-itens">
          {words.map((item) => (
            <li
              className="list-group-item d-flex justify-content-start"
              data-testid="item"
              key={item}
            >
              <div className="me-2">
                <button
                  className="btn btn-danger btn-sm"
                  data-testid={`${item}-btn-delete`}
                  type="button"
                  onClick={() => handleDelete(item)}
                >
                  <span className="text-white">x</span>
                </button>
              </div>

              <span className="text-black pt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
