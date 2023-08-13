import { default as LinkTo } from "next/link";
import {Column, Heading1, Link, Row} from '../elements';

type PageTitleProps = {
    title: String
};

const PageTitle = ({ title }: PageTitleProps) => (
    <Row>
        <Column className="mt-4">
            <Heading1>
                <LinkTo href="/">
                    <Link title="Home">Home</Link>
                </LinkTo> / {title}
            </Heading1>
        </Column>
    </Row>
);

export default PageTitle;