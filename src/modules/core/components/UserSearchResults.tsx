import * as React from 'react';

import { Typography } from '@rmwc/typography';
import { IconButton } from '@rmwc/icon-button';
import { UserCard } from './UserCard';
import { UserListItem } from './UserListItem';

import { IUserData } from '../queryHelpers';

import {
    DataTable,
    DataTableHead,
    DataTableHeadCell,
    DataTableBody,
    DataTableContent,
    DataTableRow
} from '@rmwc/data-table';

import { createUseStyles } from 'react-jss';

const cardPadding = {
    marginBottom: "10px"
}

interface IProps {
    results: Array<IUserData | undefined>,
    type: string
}

const useStyles = createUseStyles({
    Header: {
        display: "flex",
        flexDirection: "row"
    }
})

export const UserSearchResults: React.FunctionComponent<IProps> = ({ results, type }) => {
    const styles = useStyles();

    const [isListView, setIsListView] = React.useState(true);

    return (
        <>
            <div className={styles.Header}>
                <Typography use="headline3"><b>Search Results</b></Typography>
                <IconButton
                    icon={isListView ? "view_stream" : "view_list"}
                    onClick={() => setIsListView(!isListView)}
                    title={isListView ? "Stream view" : "List view"}
                />
            </div>
            <UserSearchResultsItems isListView={isListView} results={results} type={type} />
        </>
    )


}

interface IUserSearchResultsProps {
    isListView: boolean,
    results: Array<IUserData | undefined>,
    type: string
}

const UserSearchResultsItems: React.FunctionComponent<IUserSearchResultsProps> = ({ isListView, results, type }) => {
    console.log(results[0] ? results[0] : null);
    if (isListView) {
        return (
            <DataTable>
                <DataTableContent>
                    <DataTableHead>
                        <DataTableRow>
                            <DataTableHeadCell>First</DataTableHeadCell>
                            <DataTableHeadCell>Last</DataTableHeadCell>
                            <DataTableHeadCell alignEnd>Email</DataTableHeadCell>
                        </DataTableRow>
                    </DataTableHead>
                    <DataTableBody>
                        {
                            results.map(a => a ? <UserListItem data={a} type={type} key={a.slug}/> : null)
                        }
                    </DataTableBody>
                </DataTableContent>
            </DataTable>
        )
    }
    else return (
        <>
            {
                results.map(a => a ?
                    <div style={cardPadding} key={a.first_name}>
                        <UserCard data={a} type={type} />
                    </div>
                    : null
                )
            }
        </>
    );
}
