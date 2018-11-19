import React from 'react';

const ConflictsPolicy = () => (
    <div>
        <h2 data-anchor='conflicts-policy'>{it.L('Conflicts Policy')}</h2>
        <p>{it.L('We provide here a summary of the policy we maintain in order to manage conflicts of interest in respect of the duties we owe to our clients.')}</p>

        <h2 data-anchor='general'>{it.L('General')}</h2>
        <p>{it.L('Due to the nature of our business as a trading counterparty, company profits are tied to net revenue generated by you through trading. However, we aim to establish and maintain and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to the interests of our clients.')}</p>
        <p>{it.L('We have in place adequate internal procedures to ensure that you are in all cases treated fairly and that the risk of damage to client interests will be mitigated.')}</p>

        <h2 data-anchor='our-policy'>{it.L('Our Policy')}</h2>
        <p>{it.L('We aim to keep a record of the kinds of activity we carry on in which a material conflict could arise or has arisen. We also maintain procedures to manage actual or potential conflicts. This includes procedures to maintain appropriate independence between members of our staff who are involved in potentially conflicting activities, for example, through the operation of information barriers, physical separation of staff, the segregation of duties and responsibilities and maintenance of a policy of independence which requires our staff, when providing services to a client, to act in the best interests of the client and to disregard any conflicts of interest; and, in some circumstances declining to act for a client or potential client.')}</p>

        <h2 data-anchor='disclosure-general'>{it.L('Disclosure: general')}</h2>
        <p>{it.L('The organisational and administrative arrangements established by the Company to prevent or manage the conflict are not sufficient to ensure, with reasonable confidence, that the risk of damage to the interest of the Client will be prevented. However, we aim to disclose the general nature or sources of conflicts of interest.')}</p>
        <p className='invisible eu-show'>{it.L('Clients have the opportunity to consider whether to ask for more information by sending an email to compliance@binary.com, in which case further details of the conflicts of interest policy will be made available.')}</p>
    </div>
);

export default ConflictsPolicy;
