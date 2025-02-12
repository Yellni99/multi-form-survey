import "./App.css";
import MainLayout from "./components/MainLayout";
import Tabs, { Tab, TabList, TabPanel, TabPanels } from "./components/Tabs";

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>tab1</Tab>
          <Tab index={1}>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Panel1</TabPanel>
          <TabPanel index={1}>Panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
