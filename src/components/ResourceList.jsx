import React from "react";
import { useResources } from "./useRousources";

export const ResourceList = ({ resource }) => {

    const resources = useResources(resource);

    return (
        <ul>
            {resources.map(({ id, title }) => {
                return (
                    <li key={ id }>{ title }</li>
                );
            })}
        </ul>
    );
}