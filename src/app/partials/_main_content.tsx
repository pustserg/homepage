import { promises as fs } from 'fs';

export default async function MainContent() {
  const file = await fs.readFile(process.cwd() + '/src/data/experience.json', 'utf-8');
  const data = JSON.parse(file);

  type Experience = {
    company: string;
    company_url: string;
    position: string;
    work_period: string;
    description: string;
  }

  return (
    <div className="grid grid-cols-1 divide divide-y-2">
      <div className=" border-solid border-black border-b-1 py-4">
        <p className="text-xl font-bold">
          Key Skills
        </p>
        <ul className="list-none">
          <li>Programming Languages & Frameworks: Ruby, Elixir, Golang, Ruby on Rails, Grape</li>
          <li>Background Processing: Sidekiq, Sneakers</li>
          <li>Databases: PostgreSQL, Mysql, MongoDB, ElasticSearch</li>
          <li>Message Brokers: Kafka, RabbitMQ, AWS SQS</li>
          <li>Data Serialization: Protobuf, gRPC</li>
          <li>DevOps: Docker, AWS, Ansible</li>
        </ul>
      </div>
      <div className="py-4 border-solid border-black border-b-2">
        <p className="text-xl font-bold">Experience</p>
        {data.map((item: Experience, index: number) => (
          <div key={index} className="py-4">
            { item.company_url === ""
              ? <p>{item.company}</p>
              : <a className="underline hover:no-underline" href={item.company_url} target="_blank" rel="noopener noreferrer">
                  {item.company}
                </a>
            }
            <p>{item.position}</p>
            <p>{item.work_period}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="py-4 border-solid border-black border-b-2">
        <p className="text-xl font-bold">Hobbies</p>
        <p>Reading, Music, Coding, Snowboarding, Ice Hockey</p>
      </div>
    </div>
  )
}
