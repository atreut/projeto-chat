@extends('layouts.app')
@section('title')
    {{ __('messages.conversations') }}
@endsection
@section('page_css')
    <link rel="stylesheet" href="{{ asset('css/dropzone.css') }}">
    <link rel="stylesheet" href="{{ asset('css/ekko-lightbox.css') }}">
    <link rel="stylesheet" href="{{ mix('assets/css/video-js.css') }}">
    <link rel="stylesheet" href="{{ mix('assets/css/new-conversation.css') }}">
    {{--    <link href="https://www.jsviews.com/samples/samples.css" rel="stylesheet" />--}}
@endsection
@section('content')
    <div class="page-container">
        <div class="chat-container chat">
            <div class="chat__inner">
                <!-- left section of chat area (chat person selection area) -->
                <div class="chat__people-wrapper chat__people-wrapper--responsive">
                    <div class="chat__people-wrapper-header">
                        <span class="h3 mb-0">Conversas</span>
                        <div class="d-flex chat__people-wrapper-btn-group">
                            <i class="nav-icon fa fa-bars align-top chat__people-wrapper-bar"></i>                            
                            <div class="chat__people-wrapper-button" data-toggle="modal"
                                 data-target="#addNewChat">
                                <i class="nav-icon " data-toggle="tooltip" data-placement="bottom"
                                   title="{{ __('messages.new_conversation') }}"><img
                                            src="{{asset('assets/icons/chat30.png')}}"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content chat__tab-content">
                        <div class="chat__people-body tab-pane fade in active show" id="chatPeopleBody">
                            <div id="infyLoader" class="infy-loader chat__people-body-loader">
                                @include('partials.infy-loader')
                            </div>
                            <div class="text-center no-conversation">
                                <div class="chat__no-conversation">
                                    <div class="text-center"><i class="fa fa-2x fa-user" aria-hidden="true"></i></div>
                                    {{ __('messages.no_conversation_found') }}
                                </div>
                            </div>
                        </div>
                        <div class="chat__people-body tab-pane fade in active" id="archivePeopleBody">
                            <div class="text-center no-archive-conversation">
                                <div class="chat__no-archive-conversation">
                                    <div class="text-center"><i class="fa fa-2x fa-user" aria-hidden="true"></i></div>
                                    {{ __('messages.no_conversation_found') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ left section of chat area -->


                <!-- right section of chat area (chat conversation area)-->
                <div class="chat__area-wrapper">
                    @include('chat.no-chat')
                </div>
                <!--/ right section of chat area-->

                <!-- profile section (chat profile section)-->
            @include('chat.chat_profile')
            @include('chat.msg_info')
            <!--/ profile section -->
            </div>
        </div>
        <!-- Modal -->
        <div id="addNewChat" class="modal fade" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title">
                            <i class="ti-user"></i>Contatos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group user-list-chat-select" id="myContactListForChat"></ul>
                        <div class="text-center no-my-contact new-conversation__no-my-contact">
                            <div class="chat__not-selected">
                                <div class="text-center"><i class="fa fa-2x fa-user" aria-hidden="true"></i>
                                </div>
                                {{ __('messages.no_user_found') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('chat.group_modals')
        @include('chat.report_user_modal')
    </div>
    @include('chat.templates.conversation-template')
    @include('chat.templates.message')
    @include('chat.templates.no-messages-yet')
    @include('chat.templates.no-conversation')
    @include('chat.templates.group_details')
    @include('chat.templates.user_details')
    @include('chat.templates.group_listing')
    @include('chat.templates.group_members')
    @include('chat.templates.single_group_member')
    @include('chat.group_members_modal')
    @include('chat.templates.blocked_users_list')
    @include('chat.templates.add_chat_users_list')
    @include('chat.templates.badge_message_template')
    @include('chat.templates.member_options')
    @include('chat.templates.single_message')
    @include('chat.templates.contact_template')
    @include('chat.templates.conversations_list')
    @include('chat.templates.common_templates')
    @include('chat.templates.my_contacts_listing')
    @include('chat.templates.conversation-request')
    @include('chat.copyImageModal')
@endsection
@section('page_js')
    <script src="{{ asset('js/dropzone.min.js') }}"></script>
    <script src="{{ asset('js/ekko-lightbox.min.js') }}"></script>
    <script src="{{ mix('assets/js/video.min.js') }}"></script>
@endsection
@section('scripts')
    <!--custom js-->
    <script>
        let userURL = '{{url('users')}}/';
        let userListURL = '{{url('users-list')}}';
        let myContactsURL = '{{route('my-contacts')}}';
        let conversationListURL = '{{url('conversations-list')}}';
        let archiveConversationListURL = '{{url('archive-conversations')}}';
        let chatSelected = false;
        let sendMessageURL = '{{route('conversations.store')}}';
        let fileUploadURL = '{{route('file-upload')}}';
        let imageUploadURL = '{{route('image-upload')}}';
        let csrfToken = '{{csrf_token()}}';
        let authUserName = '{{ Auth::user()->name }}';
        let blockedUsersListURL = '{{url('blocked-users')}}';
        let blockUsersByMeURL = '{{url('users-blocked-by-me')}}';
        let readMessageURL = '{{url('read-message')}}';
        let authImgURL = '{{Auth::user()->photo_url}}';
        let deleteConversationUrl = '{{url('conversations')}}/';
        let deleteMessageUrl = '{{url('conversations/message')}}/';
        let createGroupURL = '{{url('groups')}}';
        let getUsers = '{{url('get-users')}}';
        let groupsList = '{{url('groups')}}';
        let appName = '{{ getAppName() }}';
        let conversationId = '{{ $conversationId }}';
        let sendChatReqURL = '{{route('send-chat-request')}}';
        let acceptChatReqURL = '{{route('accept-chat-request')}}';
        let declineChatReqURL = '{{route('decline-chat-request')}}';
        let enableGroupSetting = '{{ isGroupChatEnabled() }}';
        let reportUserURL = '{{route('report-user.store')}}';

        /** Icons URL */
        let pdfURL = '{{ asset('assets/icons/pdf.png') }}';
        let xlsURL = '{{ asset('assets/icons/xls.png') }}';
        let textURL = '{{ asset('assets/icons/text.png') }}';
        let docsURL = '{{ asset('assets/icons/docs.png') }}';
        let videoURL = '{{ asset('assets/icons/video.png') }}';
        let youtubeURL = '{{ asset('assets/icons/youtube.png') }}';
        let audioURL = '{{ asset('assets/icons/audio.png') }}';
        let isUTCTimezone  = '{{(config('app.timezone') == 'UTC') ? 1  :0 }}';
        let timeZone  = '{{config('app.timezone')}}';
    </script>
    <script src="{{ mix('assets/js/chat.js') }}"></script>
@endsection
