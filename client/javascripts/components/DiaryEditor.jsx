import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class DiraryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { postDiary } = this.props.actions;
    postDiary(this.props.diaryEditor);
    e.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              name="title"
              type="text"
              label="タイトル"
              placeholder="Enter text"
              value={this.props.diaryEditor.title}
              onChange={this.props.actions.handleDiaryChange}
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>本文</ControlLabel>
              <FormControl
                componentClass="textarea" placeholder="textarea" rows={10} name="body"
                value={this.props.diaryEditor.body}
                onChange={this.props.actions.handleDiaryChange}
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
        <div className="col-sm-6">
          hoggeee
        </div>
      </div>
    );
  }
}

DiraryEditor.propTypes = {
  actions: React.PropTypes.shape({
    postDiary: React.PropTypes.func.isRequired,
  }),
};
