// @flow
import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }: { id: string, label: string }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class DiraryEntryForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  props: Props;

  handleSubmit(e: Event) {
    const { postDiaryEntry } = this.props.actions;
    postDiaryEntry({ ...this.props.diaryEntryForm });
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                id="formControlsText"
                name="title"
                type="text"
                label="タイトル"
                placeholder="Enter text"
                value={this.props.diaryEntryForm.title}
                onChange={this.props.actions.handleDiaryEntryChange}
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>本文</ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="textarea" rows={10} name="body"
                  value={this.props.diaryEntryForm.body}
                  onChange={this.props.actions.handleDiaryEntryChange}
                />
              </FormGroup>
              <Button type="submit" className="btn-raised btn-primary">
                投稿する
              </Button>
              <Button type="submit" className="btn-raised">
                下書き保存
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

type Props = {
  actions: {
    postDiaryEntry: string,
    handleDiaryEntryChange: string,
  },
  handleDiaryEntryChange: string,
  diaryEntryForm: string,
}
