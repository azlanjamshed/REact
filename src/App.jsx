import { Routes, Route } from "react-router-dom";
import Count from "./pages/Count";
import ExpenseTracker from "./pages/ExpenseTracker";
import SearchFilter from "./pages/SearchFilter";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Main from "./pages/Tabs Component/Main";

function App() {
  return (
    <>
      {/* <Count /> */}
      {/* <Todo /> */}
      {/* <SearchFilter /> */}
      {/* <ExpenseTracker /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Count />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/tabs-components" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
