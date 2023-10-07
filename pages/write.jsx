const app = document.getElementById("app");

const Button = ({ label, type, url, id, onClick }) => {
  switch (url) {
    case url:
      return (
        <a href={url}>
          <button
            id={id}
            type={type ? type : "button"}
            className="transition-all m-0 py-2 px-4 rounded-lg bg-opacity-60 cursor-pointer hover:bg-transparent hover:opacity-60"
          >
            {label ? label : "Button"}
          </button>
        </a>
      );

    default:
      return (
        <button
          id={id}
          type={type ? type : "button"}
          className="transition-all m-0 py-2 px-4 rounded-lg bg-opacity-60 cursor-pointer hover:bg-transparent hover:opacity-60"
        >
          {label ? label : "Button"}
        </button>
      );
  }
};

const Heading = ({ title }) => <h1>{title ? title : "Heading"}</h1>;

const Header = ({ title }) => (
  <header className="flex items-center justify-center py-4">
    <div className="space-y-3 items-center">
      <Heading title={title} />
    </div>
  </header>
);

const Input = ({ type, label, placeholder, id }) => (
  <div className="m-0 p-0">
    <label for={id} class="block text-sm font-medium">
      <p className="mb-2 text-white">{label ? label : "Something"}</p>
    </label>
    <input
      type={type ? type : "text"}
      id={id}
      name={id}
      class="py-2 px-3 text-white text-sm rounded-lg block w-full"
      placeholder={placeholder ? placeholder : "Enter text here..."}
      required
    />
  </div>
);

const TextArea = ({ type, label, placeholder, id }) => (
  <div className="m-0 p-0">
    <label for={id} class="block text-sm font-medium">
      <p className="mb-2 text-white">{label ? label : "Something"}</p>
    </label>
    <textarea
      type={type ? type : "text"}
      id={id}
      name={id}
      rows="4"
      cols="50"
      class="py-2 px-3 text-white text-sm rounded-lg block w-full"
      placeholder={placeholder ? placeholder : "Enter text here..."}
      required
    />
  </div>
);

const App = () => {
  return (
    <main>
      <Header title="Formulário de entrada de mensagens" />
      <div className="flex items-center justify-center h-screen">
        <form
          method="post"
          action="./backend/write.php"
          className="container p-48 rounded-lg bg-opacity-60"
        >
          <div className="space-y-4 mb-4">
            <Input
              type="text"
              label="Nome"
              id="inp_name"
              placeholder="Enter name here..."
            />
            <TextArea type="text" label="Mensagem" id="inp_msg" />
          </div>

          <Button type="submit" label="Enviar" id="submit_id" />
        </form>
      </div>
    </main>
  );
};

ReactDOM.render(<App />, app);
