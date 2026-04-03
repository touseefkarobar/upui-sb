import{j as e,r as H}from"./iframe-DUD7WYS4.js";import{T as l}from"./index-DSrbkaNR.js";const _={title:"PAC Universal Plugin UI/Composite/Table",component:l,argTypes:{striped:{description:"Whether rows alternate in background color",control:{type:"boolean"}},bordered:{description:"Whether the table has visible borders",control:{type:"boolean"}},hoverable:{description:"Whether rows highlight on hover",control:{type:"boolean"}},size:{description:"Density of the table rows",control:{type:"select"},options:["compact","default","comfortable"]},stickyHeader:{description:"Whether the table header sticks to the top on scroll",control:{type:"boolean"}}},args:{striped:!1,bordered:!1,hoverable:!1,size:"default",stickyHeader:!1},parameters:{docs:{description:{component:`Table is a compound component for building accessible data tables.

Usage:
\`\`\`tsx
import Table from "@karobar_solutions/pac-universal-plugin-ui";

<Table striped>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
\`\`\``}}}},t=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor"},{id:3,name:"Bob Wilson",email:"bob@example.com",role:"Viewer"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor"}],i={render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Name"}),e.jsx(l.HeaderCell,{children:"Email"}),e.jsx(l.HeaderCell,{children:"Role"})]})}),e.jsx(l.Body,{children:t.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:a.role})]},a.id))})]})},c={args:{striped:!0},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Name"}),e.jsx(l.HeaderCell,{children:"Email"}),e.jsx(l.HeaderCell,{children:"Role"})]})}),e.jsx(l.Body,{children:t.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:a.role})]},a.id))})]})},b={args:{bordered:!0},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Name"}),e.jsx(l.HeaderCell,{children:"Email"}),e.jsx(l.HeaderCell,{children:"Role"})]})}),e.jsx(l.Body,{children:t.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:a.role})]},a.id))})]})},T={render:()=>{const[r,a]=H.useState(null),[o,n]=H.useState(null),d=s=>{r===s?(n(o==="asc"?"desc":o==="desc"?null:"asc"),o==="desc"&&a(null)):(a(s),n("asc"))},h=[...t].sort((s,A)=>{if(!r||!o)return 0;const p=s[r],u=A[r];return typeof p=="string"&&typeof u=="string"?o==="asc"?p.localeCompare(u):u.localeCompare(p):0});return e.jsxs(l,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sortable:!0,sortDirection:r==="name"?o:null,onSort:()=>d("name"),children:"Name"}),e.jsx(l.HeaderCell,{sortable:!0,sortDirection:r==="email"?o:null,onSort:()=>d("email"),children:"Email"}),e.jsx(l.HeaderCell,{sortable:!0,sortDirection:r==="role"?o:null,onSort:()=>d("role"),children:"Role"})]})}),e.jsx(l.Body,{children:h.map(s=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:s.name}),e.jsx(l.Cell,{children:s.email}),e.jsx(l.Cell,{children:s.role})]},s.id))})]})}},C={args:{size:"compact",bordered:!0},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"ID"}),e.jsx(l.HeaderCell,{children:"Name"}),e.jsx(l.HeaderCell,{children:"Email"}),e.jsx(l.HeaderCell,{children:"Role"})]})}),e.jsx(l.Body,{children:t.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.id}),e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:a.role})]},a.id))})]})},m={render:()=>{const[r,a]=H.useState([2]),o=n=>{a(d=>d.includes(n)?d.filter(h=>h!==n):[...d,n])};return e.jsxs(l,{hoverable:!0,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{width:50,align:"center",children:"Sel."}),e.jsx(l.HeaderCell,{children:"Name"}),e.jsx(l.HeaderCell,{children:"Email"}),e.jsx(l.HeaderCell,{children:"Role"})]})}),e.jsx(l.Body,{children:t.map(n=>e.jsxs(l.Row,{selected:r.includes(n.id),onClick:()=>o(n.id),children:[e.jsx(l.Cell,{align:"center",children:e.jsx("input",{type:"checkbox",checked:r.includes(n.id),onChange:()=>o(n.id)})}),e.jsx(l.Cell,{children:n.name}),e.jsx(l.Cell,{children:n.email}),e.jsx(l.Cell,{children:n.role})]},n.id))})]})}};var x,j,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,g,y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: (args: any) => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,D,f;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bordered: true
  },
  render: (args: any) => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(f=(D=b.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var B,k,E;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [sortCol, setSortCol] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<SortDirection>(null);
    const handleSort = (column: string) => {
      if (sortCol === column) {
        setSortDir(sortDir === "asc" ? "desc" : sortDir === "desc" ? null : "asc");
        if (sortDir === "desc") setSortCol(null);
      } else {
        setSortCol(column);
        setSortDir("asc");
      }
    };
    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortCol || !sortDir) return 0;
      const aVal = a[sortCol as keyof typeof a];
      const bVal = b[sortCol as keyof typeof b];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return 0;
    });
    return <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell sortable sortDirection={sortCol === "name" ? sortDir : null} onSort={() => handleSort("name")}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sortable sortDirection={sortCol === "email" ? sortDir : null} onSort={() => handleSort("email")}>
              Email
            </Table.HeaderCell>
            <Table.HeaderCell sortable sortDirection={sortCol === "role" ? sortDir : null} onSort={() => handleSort("role")}>
              Role
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map(row => <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...(E=(k=T.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var N,v,V;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "compact",
    bordered: true
  },
  render: (args: any) => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sampleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...(V=(v=C.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var I,W,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([2]);
    const toggleSelection = (id: number) => {
      setSelectedIds(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]);
    };
    return <Table hoverable>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell width={50} align="center">Sel.</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sampleData.map(row => <Table.Row key={row.id} selected={selectedIds.includes(row.id)} onClick={() => toggleSelection(row.id)}>
              <Table.Cell align="center">
                <input type="checkbox" checked={selectedIds.includes(row.id)} onChange={() => toggleSelection(row.id)} />
              </Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const P=["Default","Striped","Bordered","Sortable","Compact","WithSelectedRows"];export{b as Bordered,C as Compact,i as Default,T as Sortable,c as Striped,m as WithSelectedRows,P as __namedExportsOrder,_ as default};
