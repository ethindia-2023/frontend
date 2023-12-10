import React, { useRef, useState } from "react";
import Button from "app/components/Button";
import "./index.css";
export type ProjectFormProps = {
  onSubmit?: (formData: ProjectFormData) => void;
};

export type ProjectFormData = {
  projName: string;
  description: string;
};

let formData: ProjectFormData = {
  projName: "",
  description: "",
};

const ProjectForm: React.FC<ProjectFormProps> = (props: ProjectFormProps) => {
  const { onSubmit } = props;
  const [error, setError] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const projectSubmitHandler = () => {
    if (nameRef.current && nameRef.current.value !== "") {
      formData.projName = nameRef.current.value;
      nameRef.current.value = "";
    }
    if (descriptionRef.current && descriptionRef.current.value !== "") {
      formData.description = descriptionRef.current.value;
      descriptionRef.current.value = "";
    }

    if (
      formData === undefined ||
      formData.projName === undefined ||
      formData.description === undefined
    ) {
      setError("Some of the fields are empty");
    } else {
      setError(null);
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <div className="project-form">
      <input
        ref={nameRef}
        type="text"
        placeholder="Project Name"
        onChange={(e) => {
          setError(null);
        }}
      />
      <input
        ref={descriptionRef}
        type="text"
        placeholder="Project Description"
        onChange={(e) => {
          setError(null);
        }}
      />
      <Button
        label={error != null ? error : "Create Project"}
        buttonStyle={error != null ? { background: "red" } : undefined}
        onClick={projectSubmitHandler}
      />
    </div>
  );
};

export default ProjectForm;
