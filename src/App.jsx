import { Routes, Route } from "react-router-dom";
import Count from "./pages/Count";
import ExpenseTracker from "./pages/ExpenseTracker";
import SearchFilter from "./pages/SearchFilter";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import TabMain from "./pages/Tabs Component/TabMain";
import FAQMain from "./pages/FAQ/FAQMain";
import UserListApp from "./pages/API Fetch/UserList.jsx";
import Form from "./pages/Form/Form.jsx";
import YupandReactForm from "./pages/Form/YupandReactForm.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/About";
import Experiences from "./pages/Experiences";
import Recommended from "./pages/Recommended";

function App() {
  return (
    <>
      {/* <div className="min-h-screen bg-[#363C43] ">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </div> */}

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Count />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/tabs-components" element={<TabMain />} />
        <Route path="/faq" element={<FAQMain />} />
        <Route path="/user-list-app" element={<UserListApp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form-reactHookForm-yup" element={<YupandReactForm />} />
      </Routes>
    </>
  );
}

export default App;
