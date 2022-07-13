import { FC } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoTask } from "./components/TodoTask";
import { TodoTaskContextProvider } from "./contexts/TodoTaskContext";

const App: FC = () => {
  
  return (
    <div className="App">
      <TodoTaskContextProvider>
        <Header />
        <TodoTask/>
      </TodoTaskContextProvider>
    </div>
  );
};

export default App;
