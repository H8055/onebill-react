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
import Table from "@mui/joy/Table";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import "../styles/tenanat.css";

import {
  useCreateTenantMutation,
  useDeleteTenantMutation,
  useGetTenantQuery,
  useUpdateTenantMutation,
} from "../store/tenantApi";

const Tenants = () => {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const { data, error, isLoading } = useGetTenantQuery();
  const [createTenant] = useCreateTenantMutation();
  const [updateTenant] = useUpdateTenantMutation();
  const [deleteTenant] = useDeleteTenantMutation();

  console.log(error);
  console.log(isLoading);
  console.log(data);

  // const tenant = useSelector((state) => state.tenant);
  // const tenant = data.items;
  const [tenants, settenants] = useState([]);

  // console.log(tenant.users.items);
  const dispatch = useDispatch();

  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    pwd: "",
  });
  const handleInput = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log(inputData);
    createTenant(inputData);
    // dispatch(createUser(inputData));
  };

  const handleEditProcess = () => {
    console.log(editData);
    updateTenant(editData);
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
      settenants(data.items);
    }
  }, [data]);
  return (
    <>
      <div className="thead">
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          Tenants
        </Typography>
        <div className="addTenant">
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<Add />}
            onClick={() => setOpen(true)}
          >
            Add Tenant
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Create new Tenant
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
                    <FormLabel>Tenant Name</FormLabel>
                    <Input
                      autoFocus
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={inputData.name}
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
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="text"
                      name="pwd"
                      onChange={handleInput}
                      value={inputData.pwd}
                    />
                  </FormControl>
                  <Button type="submit" onClick={handleSave}>
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
          {/* //upadte modal
           */}
          <Modal open={openUpdate} onClose={() => setOpenUpdate(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" component="h2">
                Update Tenant Details
              </Typography>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Tenant Name</FormLabel>
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
                    Update Tenant
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
              <th>Tenant Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>None</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tenants &&
              tenants.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>null</td>
                    <td>null</td>
                    <td>null</td>
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
                        onClick={() => deleteTenant(user.id)}
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

export default Tenants;
