import { useSurveyStore } from "../../store";
import SectionEditor from "./SectionEditor";
import EditorMenu from "./EditorMenu";

export default function SectionEditorList() {
  const surveyStore = useSurveyStore();
  return (
    <div className="relative">
      <EditorMenu className="fixed bottom-30 left-[calc(100%-72px)] sm:bottom-auto sm:top-[263px] sm:left-[calc(50%+340px)]" />
      <div>
      {surveyStore.sections.map(section => (
        <SectionEditor key={section.id} section={section} />
      ))}
      </div>
    </div>
  );
}