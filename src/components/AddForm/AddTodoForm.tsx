import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import * as React from 'react'
import { FormEvent } from 'react';
import * as style from './AddTodoForm.scss';

interface Props {
    handleSubmit: (value: string) => void
}
interface State {
    value: string
}

export default class AddTodoForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { value: '' }
        this.updateValue = this.updateValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    public updateValue(value: string) {
        this.setState({ value })
    }

    public onSubmit(e: FormEvent<any>) {
        e.preventDefault()
        if (!this.state.value.trim()) {
            return
        }

        this.props.handleSubmit(this.state.value)
        this.setState({ value: '' })

    }

    public render() {
        const { value } = this.state
        const { updateValue, onSubmit} = this
        return (
            <div>
                <form onSubmit={onSubmit} className={style.todoTest}>
                    <Input id="name-simple" value={value} placeholder="Add Todo"
                           onChange={e => updateValue(e.target.value)}/>
                    <Button variant="contained" color="primary" type="submit">
                        Create ToDo
                    </Button>
                </form>
            </div>
        )
    }
}
