import AddPost from "@/utils/components/add_post/addpost";
import ChatBox from "@/utils/components/chatBox/chatBox";
import CreatePost from "@/utils/components/createPost/createPost";
import Navbar from "@/utils/components/navbar/navbar";
import Sidebar from "@/utils/components/side_bar/sidebar";
import "./page.css";

export default function HomePage() {
  return (
    <div className={"conteiner"}> 
      {/* <Navbar /> */}
      {/* <CreatePost /> */}
      <div className={"addPost"}>
      <AddPost />
      <ChatBox />
      </div>
      <div className={"sideBar"}>
      <Sidebar />
      </div>
    
    </div>
  );
}
