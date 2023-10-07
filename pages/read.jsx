const header = document.getElementById("header");

const Heading = ({ title }) => <h1>{title ? title : "Heading"}</h1>;

const Header = ({ title }) => (
  <header className="flex items-center justify-center py-4">
    <div className="space-y-3 items-center">
      <Heading title={title} />
    </div>
  </header>
);

const App = () => {
  return <Header title="Lista de mensagens gravadas" />;
};

ReactDOM.render(<App />, header);
