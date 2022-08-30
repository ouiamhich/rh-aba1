import React, { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { DataGrid } from "@material-ui/data-grid";
import { userRows, userColumns } from "../../empressource";
import "bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@mui/icons-material/Add";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./datatable.scss";
import Button from "react-bootstrap/Button";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const styleFormLabel = { fontWeight: "bold", fontSize: "12px" };

function getSteps() {
  return ["Personal information", "Work Information", "Contact Information"];
}

const Emptable = (props) => {
  const [gender, setGender] = useState("gender");
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="formGroup">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>First name</Form.Label>
                <Form.Control type="text" placeholder="First Name" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <div className="formGroup">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Gender</Form.Label>
                <div className="select">
                  <FormControl sx={{ width: 210 }} size="small">
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={gender}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={0}>Male</MenuItem>
                      <MenuItem value={1}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Birthday</Form.Label>
                <Form.Control style={{ width: 210 }} type="date" autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Marital Status</Form.Label>
                <div className="select">
                  <FormControl sx={{ width: 210 }} size="small">
                    <Select>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Form.Group>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="formGroup">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>
                  Employment Status{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Department</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <div className="formGroup">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Joined Date*</Form.Label>
                <Form.Control
                  style={{ width: 210 }}
                  type="date"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>
                  Termination Date*
                </Form.Label>
                <Form.Control
                  style={{ width: 210 }}
                  type="date"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Joined Date*</Form.Label>
                <Form.Control
                  style={{ width: 210 }}
                  type="date"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="formGroup">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={styleFormLabel}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            </div>
          </>
        );
      default:
        return "unknown step";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const nextStep=()=>{
  //   if(activeStep < 2)
  //   setActiveStep((currentStep)=>currentStep+1)
  // }

  // const previousStep=()=>{
  //   if(activeStep !== -1)
  //   setActiveStep((currentStep)=>currentStep-1)
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState(userRows);

  const ActionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <BorderColorIcon
              style={{
                color: "509AD8",
                margin: "auto 30px",
                cursor: "pointer",
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="top">
        <div className="left">
          <div className="datatableTitle">{props.title}</div>
        </div>
        <div className="right">
          <div className="datatableButton">
            <Button onClick={handleShow} style={{ backgroundColor: "#509AD8" }}>
              {" "}
              <AddIcon />
              {props.button}
            </Button>
          </div>
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "rgba(91,147,255,0.2)", height: "60px" }}
          closeButton
        >
          <Modal.Title
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Nunito",
            }}
          >
            {" "}
            <PeopleAltIcon /> Add Employee{" "}
          </Modal.Title>
        </Modal.Header>

        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Modal.Body>
          {activeStep === steps.length ? (
            <Typography variant="h3" align="center">
              Thank You
            </Typography>
          ) : (
            <>
              <form>{getStepContent(activeStep)}</form>
              <div className="buttonForm">
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="secondary"
                >
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )}
                <Button
                  className={classes.button}
                  variant="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </>
          )}

          {/* <div className='formGroup'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
              
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            </div> */}

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>


            <div className='formGroup'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={styleFormLabel}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            </div>            */}
        </Modal.Body>
      </Modal>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(ActionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Emptable;
