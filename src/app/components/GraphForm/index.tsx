import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import "./index.css";
import Button from "app/components/Button";
import { useState } from "react";

export type GraphFormProps = {
  graphOptions: string[];
  dataFields: string[];
  onSubmit?: (formData: GraphFormData) => void;
};

export type GraphFormData = {
  graphOption?: string;
  field?: string;
};

let formData: GraphFormData = {};

const GraphForm: React.FC<GraphFormProps> = (props: GraphFormProps) => {
  const { graphOptions, dataFields, onSubmit } = props;
  const [error, setError] = useState<string | null>(null);

  const graphSubmitHandler = () => {
    if (
      formData == undefined ||
      formData.field === undefined ||
      formData.graphOption === undefined
    ) {
      setError("some are fields are empty");
    } else {
      setError(null);
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <div className="graph-form">
      <Dropdown
        className="graph-form-dropdown"
        options={graphOptions.map((graphOption: string) => graphOption)}
        placeholder={"Select an option"}
        onChange={(option: Option) => {
          setError(null);
          formData.graphOption = option.value;
        }}
      />
      <Dropdown
        className="graph-form-dropdown"
        options={dataFields}
        placeholder={"Select an option"}
        onChange={(option: Option) => {
          setError(null);
          formData.field = option.value;
        }}
      />
      <Button
        label={error != null ? error : "Create Graph"}
        buttonStyle={error != null ? { background: "red" } : undefined}
        onClick={graphSubmitHandler}
      />
    </div>
  );
};

export default GraphForm;
