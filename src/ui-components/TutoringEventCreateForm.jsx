/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTutoringEvent } from "../graphql/mutations";
const client = generateClient();
export default function TutoringEventCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    studentName: "",
    date: "",
    conceptsCovered: "",
  };
  const [studentName, setStudentName] = React.useState(
    initialValues.studentName
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [conceptsCovered, setConceptsCovered] = React.useState(
    initialValues.conceptsCovered
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStudentName(initialValues.studentName);
    setDate(initialValues.date);
    setConceptsCovered(initialValues.conceptsCovered);
    setErrors({});
  };
  const validations = {
    studentName: [{ type: "Required" }],
    date: [{ type: "Required" }],
    conceptsCovered: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          studentName,
          date,
          conceptsCovered,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createTutoringEvent.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TutoringEventCreateForm")}
      {...rest}
    >
      <TextField
        label="Student name"
        isRequired={true}
        isReadOnly={false}
        value={studentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentName: value,
              date,
              conceptsCovered,
            };
            const result = onChange(modelFields);
            value = result?.studentName ?? value;
          }
          if (errors.studentName?.hasError) {
            runValidationTasks("studentName", value);
          }
          setStudentName(value);
        }}
        onBlur={() => runValidationTasks("studentName", studentName)}
        errorMessage={errors.studentName?.errorMessage}
        hasError={errors.studentName?.hasError}
        {...getOverrideProps(overrides, "studentName")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentName,
              date: value,
              conceptsCovered,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Concepts covered"
        isRequired={true}
        isReadOnly={false}
        value={conceptsCovered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentName,
              date,
              conceptsCovered: value,
            };
            const result = onChange(modelFields);
            value = result?.conceptsCovered ?? value;
          }
          if (errors.conceptsCovered?.hasError) {
            runValidationTasks("conceptsCovered", value);
          }
          setConceptsCovered(value);
        }}
        onBlur={() => runValidationTasks("conceptsCovered", conceptsCovered)}
        errorMessage={errors.conceptsCovered?.errorMessage}
        hasError={errors.conceptsCovered?.hasError}
        {...getOverrideProps(overrides, "conceptsCovered")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
