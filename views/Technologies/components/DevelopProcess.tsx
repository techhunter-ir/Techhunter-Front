import classes from "../index.module.scss";
import { Collapse, Space } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const advantagesList = [
  {
    id: 1,
    title: "Gathering the requirements",
    text: "We will work with you to blueprint a system that can be built efficiently to meet your needs. The idea is to help you define a minimal viable product—the first usable form of your application.",
  },
  {
    id: 2,
    title: "Use cases, user stories, wireframing",
    text: "Your requirements are broken into small parts known as user stories. Each story describes a small piece of work needed to achieve results. Alternatively, we can use other techniques such as use cases and wireframes to quickly capture the “who”, “what” and “why” of a future product. This is where we start to get a sense of the amount of work involved.",
  },
  {
    id: 3,
    title: "Estimates and costs",
    text: "The time and price estimate for your new application is based on estimates for each unit of work as defined in a previous step. Summing it all up gives us the estimated completion date. Requirements can be added or changed at any time.",
  },
  {
    id: 4,
    title: "Creating a backlog",
    text: "Before development starts, all user stories are added to the product backlog - a list of requirements for a product. Features, bug fixes, all the things needed to successfully deliver a viable product.",
  },
  {
    id: 5,
    title: "Defining sprints",
    text: "A sprint (or iteration) is the basic unit of development. It usually lasts for a week or two and aims to implement a fixed number of backlog items. The goal of each sprint is to have a system that is integrated and potentially shippable.",
  },
  {
    id: 6,
    title: "Iterating",
    text: "At the end of a sprint, the team reviews the sprint to articulate lessons learned and check progress. A new set of backlog items is chosen for the next sprint, and the work continues until the product is ready for the market.",
  },
  {
    id: 7,
    title: "Production",
    text: "This process increases the quality of the final product, copes with changes, provides better estimates without spending too much time on them, and allows you to be more in control of the project schedule and state.",
  },
];

export const DevelopProcess = () => {
  return (
    <div className={classes.container}>
      <h3>DEVELOPMENT PROCESS</h3>
      <Space style={{ width: "100%" }} direction="vertical">
        {advantagesList.map((ad) => (
          <Collapse
            key={ad.title}
            collapsible="header"
            defaultActiveKey={["1"]}
          >
            <Panel header={ad.title} key={ad.id}>
              <p>{ad.text}</p>
            </Panel>
          </Collapse>
        ))}
      </Space>
    </div>
  );
};
