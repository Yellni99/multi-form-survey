// src > components > edit > QuestionEditor.tsx

import Panel, { PanelBody, PanelFooter, PanelHeader } from "../Panel";
import Input from "../Input";
import QuestionBodyEditor from "./QuestionBodyEditor";
import Question from "../../models/question";
import {observer} from "mobx-react-lite";
import QuestionTypeEditor from "./QuestionTypeEditor";
import CopyIcon from "../../assets/icons/filter_none.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import Switch from "../Switch";
import Divider from "../Divider";

interface Props {
  question: Question;
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const QuestionEditor = observer(function QuestionEditor({ question, onCopy, onDelete }: Props) {
  return (
    <Panel className="border-l-10 border-l-transparent focus-within:border-l-main" >
      <PanelHeader className="flex mb-25">
        <Input className="flex-1 mr-30" />
        <QuestionTypeEditor type={question.type} onChange={question.setType} />
      </PanelHeader>
      <PanelBody>
        <QuestionBodyEditor type={question.type} />
      </PanelBody>
      <PanelFooter className="flex justify-end gap-x-24 h-24">
        <button onClick={() => onCopy(question.id)}><CopyIcon /></button>
        <button onClick={() => onDelete(question.id)}><DeleteIcon /></button>
          <Divider direction ="vertical" />   
          
          <div className="flex items-center">    
            <span className="mr-13">필수</span>
            <Switch
              id={`${question.id}_switch`}
              checked={question.required}
              onChange={question.setRequired}
            />
          </div>    
           
      </PanelFooter>
    </Panel>
  );
});

export default QuestionEditor;
