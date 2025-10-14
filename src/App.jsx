import { Routes, Route } from "react-router-dom";
import Count from "./pages/Count";
import ExpenseTracker from "./pages/ExpenseTracker";
import SearchFilter from "./pages/SearchFilter";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import TabMain from "./pages/Tabs Component/TabMain";
import FAQMain from "./pages/FAQ/FAQMain";
import UserListApp from "./pages/API Fetch/UserList.jsx";

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
        <Route path="/tabs-components" element={<TabMain />} />
        <Route path="/faq" element={<FAQMain />} />
        <Route path="user-list-app" element={<UserListApp />} />
      </Routes>
    </>
  );
}

export default App;
