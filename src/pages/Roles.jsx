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
// import Table from "../components/Table.jsx";
import "../styles/tenanat.css";
import {
  useCreateRolesMutation,
  useDeleteRolesMutation,
  useGetRolesQuery,
  useUpdateRolesMutation,
} from "../store/rolesApi.jsx";
import { useEffect, useState } from "react";
import Table from "@mui/joy/Table";

const Roles = () => {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const { data, error, isLoading } = useGetRolesQuery();
  const [createRoles] = useCreateRolesMutation();
  const [deleteRoles] = useDeleteRolesMutation();
  const [updateRoles] = useUpdateRolesMutation();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  const [users, setusers] = useState([]);

  const [inputData, setinputData] = useState({
    name: "",
  });
  const handleInput = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(inputData);
    createRoles(inputData);
    // dispatch(createUser(inputData));
  };

  const handleEditProcess = () => {
    console.log(editData);
    updateRoles(editData);
    // dispatch(createUser(inputData));
  };

  const [editData, seteditData] = useState({
    name: "",
    concurrencyStamp: "",
  });

  const handleEdit = (name, CS, id) => {
    seteditData({ name: name, concurrencyStamp: CS, id });
    setOpenUpdate(true);
  };

  useEffect(() => {
    // dispatch(fetchtenants());
    if (data) {
      console.log(data);
      setusers(data.items);
    }
  }, [data]);

  return (
    <>
      <div className="thead">
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          Roles
        </Typography>
        <div className="addTenant">
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<Add />}
            onClick={() => setOpen(true)}
          >
            Add Roles
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Create new Roles
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
                    <FormLabel>Role Name</FormLabel>
                    <Input
                      autoFocus
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={inputData.name}
                    />
                  </FormControl>

                  <Button type="submit" onClick={handleSave}>
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
          {/* on update form */}
          <Modal open={openUpdate} onClose={() => setOpenUpdate(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Create new Roles
              </Typography>
              <Typography
                id="basic-modal-dialog-description"
                textColor="text.tertiary"
              >
                update Role
              </Typography>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Role Name</FormLabel>
                    <Input
                      autoFocus
                      type="text"
                      name="name"
                      onChange={(e) =>
                        seteditData({ ...editData, name: e.target.value })
                      }
                      value={editData.name}
                    />
                  </FormControl>

                  <Button type="submit" onClick={handleEditProcess}>
                    Update Role
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
              <th style={{ width: "40%" }}>Tenant Id</th>
              <th>Roles Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td></td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() =>
                          handleEdit(user.name, user.concurrencyStamp, user.id)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        type="submit"
                        color="danger"
                        key={user.id}
                        onClick={() => deleteRoles(user.id)}
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

export default Roles;
