import React from 'react';
import { connect } from 'react-redux';
import TagList from './TagList';
import { Link } from 'react-router-dom';

const QuestionListItem = ({title, tags, question_id}) => (
    <div className="mb-3">
        <h3>{title}</h3>
        <div className="mb-2">
            <TagList tags={tags}/>
        </div>
        <div>
            <Link to={`/questions/${question_id}`}>
                <button>
                    More info!
                </button>
            </Link>
        </div>
    </div>
);

const QuestionList = ({questions}) => (
    <div>
        { questions && questions.length ? 
            <div>
                { questions.map(q => <QuestionListItem key={q.question_id} {...q}/>)}
            </div>
            :
            <div>
                ...Loading questions
            </div>
        }
    </div>
);

const mapStateToProps = ({questions}) => ({
    questions
});

export default connect(mapStateToProps)(QuestionList);