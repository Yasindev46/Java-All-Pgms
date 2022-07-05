const files = [
    {
      name: "folder1",
      items: [
        {
          name: "folder11",
          items: [
            {
              name: "folder111",
              items: [
                {
                  name: "file1"
                },
                {
                  name: "file2"
                }
              ]
            },
            {
              name: "file2"
            }
          ]
        },
        {
          name: "folder12",
          items: []
        },
        {
          name: "folder13",
          items: []
        }
      ]
    },
    {
      name: "folder2",
      items: [
        {
          name: "folder11",
          items: [
            {
              name: "file1"
            },
            {
              name: "file2"
            }
          ]
        },
        {
          name: "folder12",
          items: []
        },
        {
          name: "folder13",
          items: []
        }
      ]
    },
    {
      name: "folder3",
      items: [{ name: "file1" }, { name: "file2" }]
    },
    {
      name: "folder4",
      items: []
    }
  ];
  
  console.log(files.flat(2));
  
  export default function App() {
    return (
      <div className="App">
        <h1>Folder Structure</h1>
        {files.map((item, i) => {
          return (
            <div>
              <p>{item.name} </p>
              <li>{} </li>
            </div>
          );
        })}
      </div>
    );
  }