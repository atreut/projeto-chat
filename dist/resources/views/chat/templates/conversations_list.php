<script id="tmplConversationsList" type="text/x-jsrender">
    <div class="contact-area">
        <div class="chat__person-box" data-id="{{:contactId}}" data-is_group="{{:contact.is_group}}" id="user-{{:contactId}}" data-is_my_contact="{{:~checkForMyContact(contactId)}}">
            <div class="position-relative chat__person-box-status-wrapper">
                {{if !contact.is_group && showStatus}}<div class="chat__person-box-status {{if is_online}} chat__person-box-status--online {{else}} chat__person-box-status--offline{{/if}}"></div>{{/if}}
                <div class="chat__person-box-avtar chat__person-box-avtar--active">
                    <img src="{{:contactDetail.photo_url}}" alt="<?php __('messages.person_image') ?>"
                         class="user-avatar-img">
                </div>
            </div>
            <div class="chat__person-box-detail">
                <h5 class="mb-1 chat__person-box-name contact-name">{{>contactDetail.name}}
                    <span class="contact-status"> 
                    {{if showUserStatus && ~checkUserStatus(contactDetail)}} 
                        <i class="nav-icon user-status-icon" data-toggle="tooltip" data-placement="top" title="{{:contactDetail.user_status.status}}" data-original-title="{{:contactDetail.user_status.status}}">
                            {{:contactDetail.user_status.emoji}}
                        </i> 
                    {{/if}}
                    </span>
                </h5>
                <p class="mb-0 chat-message">{{if !~getDraftMessage(contactId)}}{{:~getMessageByItsTypeForChatList(contact.message, contact.message_type, contact.file_name)}}{{else}}{{:~getDraftMessage(contactId) }}{{/if}}</p>
            </div>
            <div class="chat__person-box-msg-time">
                <div class="chat__person-box-time">{{:~getLocalDate(contact.created_at)}}</div>
                <div class="chat__person-box-count {{if contact.unread_count <= 0}} d-none {{/if}}">{{:contact.unread_count}}</div>
                <a class="dropdown-item text-center chat__person-box-delete more-delete-option">
                    <i class="fa fa-trash"></i>
                </a>
            </div>
        </div>
    </div>

</script>
