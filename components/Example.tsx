import { styled } from '@mui/material/styles'

export interface ExampleProps {
  sentence?: string
}

const Red = styled('div')({
  backgroundColor: 'red',
})

export function Example(props: ExampleProps) {
  return (
    <Red>
      <div>this is my example component</div>
      <div>{props.sentence}</div>
    </Red>
  )
}
