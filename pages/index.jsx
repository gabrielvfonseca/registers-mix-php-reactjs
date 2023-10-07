const app = document.getElementById("app");

const Button = ({ label, url, id }) => {
  switch (url) {
    case url:
      return (
        <a href={url}>
          <button
            id={id}
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
          className="transition-all m-0 py-2 px-4 rounded-lg bg-opacity-60 cursor-pointer hover:bg-transparent hover:opacity-60"
        >
          {label ? label : "Button"}
        </button>
      );
  }
};

const Heading = ({ title }) => <h1>{title ? title : "Heading"}</h1>;

const Paragraph = ({ text }) => (
  <p className="mt-2 mb-4 font-medium text-white">
    {text ? text : "Paragraph"}
  </p>
);

const Header = ({ title }) => (
  <header className="flex items-center justify-center py-4">
    <div className="space-y-3 items-center">
      <Heading title={title} />
    </div>
  </header>
);

const App = () => {
  return (
    <main>
      <Header title="Mensagens" />
      <div className="flex items-center justify-center h-screen">
        <div className="container space-x-4 p-48 rounded-lg bg-opacity-60">
          <Paragraph text="Selecione uma das opções:" />
          <Button url="./read.php" label="Ler" />
          <Button url="./write.php" label="Escrever" />
        </div>
      </div>
    </main>
  );
};

ReactDOM.render(<App />, app);
