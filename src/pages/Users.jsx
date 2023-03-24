import React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Checkbox from "@mui/joy/Checkbox";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

// import Table from "../components/Table.jsx";
import Table from "@mui/joy/Table";

import "../styles/tenanat.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "../store/userApi";
import { useGetRolesQuery } from "../store/rolesApi";

const Users = () => {
  // const user = useSelector((state) => state.getUser);
  const [user, setuser] = useState([]);
  const [roles, setroles] = useState([]);
  const [rolesoptn, setrolesoptn] = useState([]);
  // console.log(user.users.items);
  // const dispatch = useDispatch();

  const { data, error, isLoading } = useGetUserQuery();
  // const roleData = useGetRolesQuery();
  // console.log(roleData.data.items);

  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  useEffect(() => {
    // dispatch(fetchUsers());
    if (data) {
      setuser(data.items);
    }
    // if (roleData) {
    //   setroles(roleData.data.items);
    // }
  }, [data]);

  const [inputData, setinputData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    pwd: "",
  });
  const handleInput = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(inputData);
    // dispatch(createUser(inputData));
    createUser(inputData);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const [editData, seteditData] = useState({
    userName: "",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    password: "",
    concurrencyStamp: "",
  });

  const handleEdit = (
    userName,
    name,
    surname,
    email,
    phoneNumber,
    password,
    concurrencyStamp,
    id
  ) => {
    seteditData({
      userName,
      name,
      surname,
      email,
      phoneNumber,
      password,
      concurrencyStamp,
      id,
    });
    setOpenUpdate(true);
  };

  const handleDelete = (user) => {
    console.log(user);
    deleteUser(user);
    // dispatch(removeUser(user));
  };

  const handleEditProcess = () => {
    console.log(editData);
    updateUser(editData);
    // dispatch(createUser(inputData));
  };

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="thead">
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          Users
        </Typography>
        <div className="addTenant">
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<Add />}
            onClick={() => setOpen(true)}
          >
            Add Users
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Create new Users
              </Typography>
              <Typography
                id="basic-modal-dialog-description"
                textColor="text.tertiary"
              >
                Fill in the information of the project.
              </Typography>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      autoFocus
                      type="text"
                      name="username"
                      onChange={handleInput}
                      value={inputData.username}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="text"
                      name="pwd"
                      onChange={handleInput}
                      value={inputData.pwd}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={inputData.name}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Surname</FormLabel>
                    <Input
                      type="text"
                      name="surname"
                      onChange={handleInput}
                      value={inputData.surname}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="text"
                      name="email"
                      onChange={handleInput}
                      value={inputData.email}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      name="phoneNumber"
                      onChange={handleInput}
                      value={inputData.phoneNumber}
                    />
                  </FormControl>
                  {/* <Select
                    defaultValue="dog"
                    // onChange={() => setrolesoptn(e.target.value)}
                  >
                    {roles.map((optn, i) => (
                      <Option value="dog">{optn.name}</Option>
                    ))}
                  </Select> */}
                  <Button type="submit" onClick={handleSave}>
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
          <Modal open={openUpdate} onClose={() => setOpenUpdate(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Create new Users
              </Typography>
              <Typography
                id="basic-modal-dialog-description"
                textColor="text.tertiary"
              >
                Fill in the information of the project.
              </Typography>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      autoFocus
                      type="text"
                      name="userName"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.userName}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="text"
                      name="password"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.password}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.name}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Surname</FormLabel>
                    <Input
                      type="text"
                      name="surname"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.surname}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="text"
                      name="email"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.email}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      name="phoneNumber"
                      onChange={(e) =>
                        seteditData({
                          ...editData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={editData.phoneNumber}
                    />
                  </FormControl>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Checkbox label="Active" defaultChecked />
                    <Checkbox
                      label="lockout Enabled
"
                      defaultChecked
                    />
                  </Box>
                  <Button type="submit" onClick={handleEditProcess}>
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        </div>
      </div>
      <div className="tanbleContainer">
        <Table aria-label="basic table">
          <thead>
            <tr>
              {/* <th style={{ width: "40%" }}>Tenant Id</th> */}
              <th>User Name</th>
              <th>Name</th>
              <th>Sername</th>
              <th>Email</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.userName}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() =>
                          handleEdit(
                            user.userName,
                            user.name,
                            user.surname,
                            user.email,
                            user.phoneNumber,
                            user.password,
                            user.concurrencyStamp,
                            user.id
                          )
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        type="submit"
                        color="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      {/* <Table /> */}
    </>
  );
};

export default Users;
