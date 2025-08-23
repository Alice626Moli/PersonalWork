




import styled from 'styled-components'



export const Wrapper = styled.div`
margin: 30px auto;
max-width:600px;
padding:24px;
border:1px solid #ddd;
border-radius:12px;
background:#fff;
box-shadow:0 3px 10px rgba(0,0,0,0.12);

`

export const TaskListWrapper= styled`
list-style: none;
padding-left:0;
margin-top:10px;
`

export const TaskItem = styled.li`
  padding: 14px 18px;
  margin-bottom: 14px;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${({ done }) => (done ? '#d4edda' : '#f9f9f9')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  opacity: ${({ done }) => (done ? 0.65 : 1)};
  color: ${({ done }) => (done ? '#155724' : '#333')};

  font-size: 17px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ done }) => (done ? '#c3e6cb' : '#e9ecef')};
  }
`


export const Select = styled.select`
  width: 20%;
  padding: 11px 12px;
  margin-right: 14px;
  font-size: 16px;
  border-radius: 8px;
  border: 1.8px solid #bbb;
  box-sizing: border-box;
  cursor: pointer;
  vertical-align: middle;
  transition: border-color 0.25s;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

export const InputArea = styled.div`
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 55%;
  padding: 12px 14px;
  margin-right: 14px;
  font-size: 16px;
  border: 1.8px solid #bbb;
  border-radius: 8px;
  box-sizing: border-box;
  vertical-align: middle;
  transition: border-color 0.25s;

&:focus{
border-color: #3498db;
outline: none;
}
`
;

export const Button = styled.button`
  padding: 12px 22px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

