import React, { useState } from "react";
import Button from "app/components/Button";
import "./index.css"
export type ProjectFormProps = {
  onSubmit?: (formData: ProjectFormData) => void;
};

export type ProjectFormData = {
  name?: string;
  description?: string;
};

let formData: ProjectFormData = {};

const ProjectForm: React.FC<ProjectFormProps> = (props: ProjectFormProps) => {
  const { onSubmit } = props;
  const [error, setError] = useState<string | null>(null);

  const projectSubmitHandler = () => {
    if (
      formData === undefined ||
      formData.name === undefined ||
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
        type="text"
        placeholder="Project Name"
        onChange={(e) => {
          setError(null);
          formData.name = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Project Description"
        onChange={(e) => {
          setError(null);
          formData.description = e.target.value;
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
