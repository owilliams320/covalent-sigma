import './tree-list';
import './tree-list-item';
export default {
    title: 'Components/Tree List',
    argTypes: {
        icon: {
            control: 'text',
            defaultValue: 'description'
        }
    },
    parameters: {
        layout: 'centered',
    }
}

export const TreeList = ({icon}) => {
    return `
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <td-tree-list-item icon="${icon}" slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </td-tree-list-item>
                <td-tree-list-item icon="${icon}" slot="nest" isOpen="true">
                    <div slot="label">PDCRAdmin</div>
                    <td-tree-list-item icon="${icon}" slot="nest">
                        <div slot="label">PDCRAdmin</div>
                    </td-tree-list-item>
                    <td-tree-list-item icon="${icon}" slot="nest">
                        <div slot="label">PDCRAdmin</div>
                    </td-tree-list-item>
                </td-tree-list-item>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
    `
}

export const TwoLineItems = ({icon}) => {
    return `
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <td-tree-list-item icon="${icon}" slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </td-tree-list-item>
                <td-tree-list-item icon="${icon}" slot="nest" isOpen="true">
                    <div slot="label">PDCRAdmin</div>
                    <td-tree-list-item icon="${icon}" slot="nest">
                        <div slot="label">PDCRAdmin</div>
                        <div slot="extraContent">VARCHAR(8)</div>
                    </td-tree-list-item>
                    <td-tree-list-item icon="${icon}" slot="nest">
                        <div slot="label">PDCRAdmin</div>
                        <div slot="extraContent">VARCHAR(8)</div>
                    </td-tree-list-item>
                </td-tree-list-item>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
    `
}

export const EmptyState = ({icon}) => {
    return `
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}" isOpen="true">
                <div slot="label">PDCRAdmin</div>
                <td-tree-list-item icon="${icon}" slot="nest">
                    <div slot="label">PDCRAdmin</div>
                </td-tree-list-item>
                <td-tree-list-item icon="${icon}" slot="nest" isOpen="true">
                    <div slot="label">PDCRAdmin</div>
                    <td-tree-list-item icon="${icon}" slot="nest" isOpen="true">
                        <div slot="label">PDCRAdmin</div>
                    </td-tree-list-item>
                    <td-tree-list-item icon="${icon}" slot="nest">
                        <div slot="label">PDCRAdmin</div>
                    </td-tree-list-item>
                </td-tree-list-item>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
        <td-tree-list>
            <td-tree-list-item icon="${icon}">
                <div slot="label">PDCRAdmin</div>
            </td-tree-list-item>
        </td-tree-list>
    `
}