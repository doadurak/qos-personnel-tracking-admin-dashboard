// src/utils/redirectByRole.js
import { ROLES } from "../constants/roles";

export const redirectByRole = (role, navigate) => {
  if (role === ROLES.ADMIN) navigate("/dashboard/admin");
  else if (role === ROLES.LEADER) navigate("/dashboard/leader");
  else if (role === ROLES.EMPLOYEE) navigate("/dashboard/employee");
  else navigate("/login");
};
