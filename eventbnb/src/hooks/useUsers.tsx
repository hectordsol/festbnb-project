import { useContext } from "react";
import UsersContext from "../context/UserProvider";

function useUsers() {
  return useContext(UsersContext)
}

export default useUsers;
