import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    name={faker.name.findName()}
                    date={new Date().getTime()}
                    text={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    name={faker.name.findName()}
                    date={new Date().getTime()}
                    text={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    name={faker.name.findName()}
                    date={new Date().getTime()}
                    text={faker.lorem.sentence()}
                />
            </ApprovalCard>


        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))