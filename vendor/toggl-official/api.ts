/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccountsLinkedSsoProfile {
	/** @example "acme.com" */
	domain?: string;
	/** @example "Default SSO profile for Acme Corp" */
	name?: string;
	/** @example 442244 */
	sso_profile_id?: number;
}

export interface BaseBillableHourlyRate {
	billable_seconds?: number;
	currency?: string;
	hourly_rate_in_cents?: number;
}

export interface BaseDataTrendsPost {
	billable?: boolean;
	currency?: string;
	end_date?: string;
	ids?: UtilsInt64Slice;
	resolution?: string;
	rounding?: number;
	rounding_minutes?: number;
	start_date?: string;
}

export interface BasePost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface BaseRangePost {
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
}

export interface BillingFancyPlan {
	name?: string;
	plan_id?: number;
	pricing_plans?: BillingFancyPricingPlan[];
}

export interface BillingPricingStruct {
	currency_id?: number;
	discount_percentage?: number;
	discount_to?: string;
	plans?: BillingFancyPlan[];
	tax_included?: boolean;
	tax_percentage?: number;
	tax_type?: string;
	user_count?: number;
}

export interface BillingFancyPricingPlan {
	actual_price_in_usd_cents?: number;
	campaign?: ModelsCampaign;
	list_price_in_usd_cents?: number;
	name?: string;
	period?: number;
	price_point_handle?: string;
	prices_month?: BillingPricesStruct;
	prices_period?: BillingPricesStruct;
	pricing_plan_id?: number;
}

export interface BillingPricesStruct {
	actual?: number;
	base?: number;
	with_tax?: number;
}

export interface ClientPayload {
	/** Client name */
	name?: string;
	notes?: string;
	/** Workspace ID */
	wid?: number;
}

export interface ClientsDataTrendsGraph {
	data?: ClientsDataTrendsGraphData[];
	resolution?: string;
}

export interface ClientsDataTrendsGraphData {
	clients?: ClientsReportClient[];
	date?: string;
}

export interface ClientsDataTrendsReport {
	currency?: string;
	graph?: ClientsDataTrendsGraph;
}

export interface ClientsReportClient {
	billable_seconds?: number;
	client_id?: number;
	earnings?: number;
	name?: string;
	total_seconds?: number;
}

export interface ComparativeComparativePost {
	billable?: boolean;
	client_ids?: number[];
	end_date?: string;
	group_ids?: number[];
	project_ids?: number[];
	resolution?: string;
	rounding?: number;
	rounding_minutes?: number;
	start_date?: string;
	tag_ids?: number[];
	task_ids?: number[];
	user_ids?: number[];
}

export interface ComparativeGraphData {
	date?: string;
	total_seconds?: number;
}

export interface ComparativeReport {
	graph?: ComparativeReportGraph;
}

export interface ComparativeReportGraph {
	data?: ComparativeGraphData[];
	resolution?: string;
}

export interface CustomerCoupon {
	amount_off?: number;
	deleted?: boolean;
	duration?: string;
	duration_in_months?: number;
	id?: string;
	name?: string;
	percent_off?: number;
	valid?: boolean;
}

export interface CustomerDiscountResponse {
	coupon?: CustomerCoupon;
	promotion_code?: CustomerPromotionCode;
}

export interface CustomerPaymentMethod {
	card?: CustomerPaymentMethodCard;
	sepa_debit?: CustomerPaymentMethodSEPADebit;
	type?: string;
	us_bank_account?: CustomerPaymentMethodUSBankAccount;
}

export interface CustomerPaymentMethodCard {
	brand?: string;
	country?: string;
	exp_month?: number;
	exp_year?: number;
	last4?: string;
}

export interface CustomerPaymentMethodSEPADebit {
	bank_code?: string;
	country?: string;
	last4?: string;
}

export interface CustomerPaymentMethodUSBankAccount {
	bank_name?: string;
	blocked?: boolean;
	blocked_reason?: string;
	last4?: string;
}

export interface CustomerPromotionCode {
	active?: boolean;
	code?: string;
	expires_at?: string;
	id?: string;
}

export interface CustomerUnifiedCustomerResponse {
	address_line?: string;
	country_id?: string;
	currency?: string;
	customer_name?: string;
	default_payment_method?: CustomerPaymentMethod;
	discount?: CustomerDiscountResponse;
	id?: string;
	postal_code?: string;
	site?: string;
	state?: string;
	tax_number?: string;
	toggl_user_email?: string;
	toggl_user_id?: number;
}

export interface DashboardAllActivities {
	description?: string;
	duration?: number;
	project_id?: number;
	/** @format date-time */
	stop?: string;
	tid?: number;
	user_id?: number;
}

export interface DesktopLoginToken {
	login_token?: string;
}

export interface DetailedExportPDFPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	cents_separator?: string;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	date_format?: 'MM/DD/YYYY' | 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'DD.MM.YYYY';
	/** Description, optional, filtering attribute. */
	description?: string;
	display_mode?: string;
	/** Duration format, optional, default "classic". Can be "classic", "decimal" or "improved". */
	duration_format?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/**
	 * EnrichResponse, optional, default false. It will force the detailed report to return as much information as possible,
	 * as it does for the export.
	 */
	enrich_response?: boolean;
	first_id?: number;
	first_row_number?: number;
	first_timestamp?: number;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Whether time entries should be grouped, optional, default false. */
	grouped?: boolean;
	/** Whether amounts should be hidden, optional, default false. */
	hide_amounts?: boolean;
	hour_format?: string;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Order by field, optional, default "date". Can be "date", "user", "duration", "description" or "last_update". */
	order_by?: string;
	/** Order direction, optional. Can be ASC or DESC. */
	order_dir?: string;
	/** PageSize defines the number of items per page, optional, default 50. */
	page_size?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface DetailedGroupedTimeEntry {
	billable?: boolean;
	billable_amount_in_cents?: number;
	client_name?: string;
	currency?: string;
	description?: string;
	email?: string;
	hourly_rate_in_cents?: number;
	project_color?: string;
	project_hex?: string;
	project_id?: number;
	project_name?: string;
	row_number?: number;
	tag_ids?: number[];
	tag_names?: string[];
	task_id?: number;
	task_name?: string;
	time_entries?: DetailedSingleTimeEntry[];
	user_id?: number;
	username?: string;
}

export interface DetailedPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/**
	 * EnrichResponse, optional, default false. It will force the detailed report to return as much information as possible,
	 * as it does for the export.
	 */
	enrich_response?: boolean;
	first_id?: number;
	first_row_number?: number;
	first_timestamp?: number;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Whether time entries should be grouped, optional, default false. */
	grouped?: boolean;
	/** Whether amounts should be hidden, optional, default false. */
	hide_amounts?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Order by field, optional, default "date". Can be "date", "user", "duration", "description" or "last_update". */
	order_by?: string;
	/** Order direction, optional. Can be ASC or DESC. */
	order_dir?: string;
	/** PageSize defines the number of items per page, optional, default 50. */
	page_size?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface DetailedSearchExportPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** Duration format, optional, default "classic". Can be "classic", "decimal" or "improved". */
	duration_format?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/**
	 * EnrichResponse, optional, default false. It will force the detailed report to return as much information as possible,
	 * as it does for the export.
	 */
	enrich_response?: boolean;
	first_id?: number;
	first_row_number?: number;
	first_timestamp?: number;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Whether time entries should be grouped, optional, default false. */
	grouped?: boolean;
	/** Whether amounts should be hidden, optional, default false. */
	hide_amounts?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Order by field, optional, default "date". Can be "date", "user", "duration", "description" or "last_update". */
	order_by?: string;
	/** Order direction, optional. Can be ASC or DESC. */
	order_dir?: string;
	/** PageSize defines the number of items per page, optional, default 50. */
	page_size?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface DetailedSingleTimeEntry {
	at?: string;
	/** used by reports v2 proxy */
	at_tz?: string;
	id?: number;
	seconds?: number;
	start?: string;
	stop?: string;
}

export type DictionaryGeneralDictionary = Record<string, DictionaryReportDict>;

export type DictionaryProjectDictionary = Record<string, DictionaryProjectUserDict>;

export interface DictionaryProjectUserDict {
	actual_hours?: number;
	actual_seconds?: number;
	client_id?: number;
	color?: string;
	currency?: string;
	end_date?: string;
	estimated_hours?: number;
	estimated_seconds?: number;
	fixed_fee?: number;
	id?: number;
	name?: string;
	start_date?: string;
}

export interface DictionaryReportDict {
	id?: number;
	name?: string;
}

export interface DictionaryReportDictionaries {
	clients?: DictionaryGeneralDictionary;
	/** Remove it after FlexQ release. */
	filters?: DictionaryReportDictionariesData;
	projects?: DictionaryProjectDictionary;
	tags?: DictionaryGeneralDictionary;
	tasks?: DictionaryTaskDictionary;
	user_groups?: DictionaryGeneralDictionary;
	users?: DictionaryUserDictionary;
}

export interface DictionaryReportDictionariesData {
	clients?: DictionaryGeneralDictionary;
	projects?: DictionaryProjectDictionary;
	tags?: DictionaryGeneralDictionary;
	tasks?: DictionaryTaskDictionary;
	user_groups?: DictionaryGeneralDictionary;
	users?: DictionaryUserDictionary;
}

export interface DictionaryReportUserDict {
	avatar_url?: string;
	email?: string;
	group_ids?: string;
	id?: number;
	labour_cost?: number;
	name?: string;
}

export interface DictionaryTaskDict {
	estimated_seconds?: number;
	id?: number;
	name?: string;
	project_id?: number;
	tracked_seconds?: number;
}

export type DictionaryTaskDictionary = Record<string, DictionaryTaskDict>;

export type DictionaryUserDictionary = Record<string, DictionaryReportUserDict>;

export interface DtoClientFilterParamsRequest {
	/** Client IDs for filtering. */
	ids?: number[];
	/** Client name for filtering. */
	name?: string;
	/** Start is the client ID cursor for pagination. */
	start?: number;
}

export interface DtoClientFilterResponse {
	/** Client ID. */
	id?: number;
	/** Client name. */
	name?: string;
}

export interface DtoEmployeeProfitability {
	currency: string;
	end_date?: string;
	group_ids?: UtilsInt64Slice;
	resolution?: string;
	rounding?: number;
	rounding_minutes?: number;
	start_date?: string;
	user_ids?: UtilsInt64Slice;
}

export interface DtoProjectFilterParamRequest {
	/** Client IDs, optional. */
	client_ids?: number[];
	/** Currency, optional, example "EUR". */
	currency?: string;
	/** Project IDs, optional. */
	ids?: number[];
	/** Whether the wanted projects are archived, optional, default false. */
	is_active?: boolean;
	/** Whether the wanted projects are billable, optional, premium feature, default false. */
	is_billable?: boolean;
	/** Whether the wanted projects are private, optional, default false. */
	is_private?: boolean;
	/** Project name, optional. */
	name?: string;
	/** PageSize is the number of records returned per page. If unset, the default value of 201 will be used. */
	page_size?: number;
	/** Start is used for pagination, optional, default 0. The api will return the next projects page with id >= Start. */
	start?: number;
}

export interface DtoProjectFilterResponse {
	active?: boolean;
	billable?: boolean;
	client_id?: number;
	color?: string;
	currency?: string;
	id?: number;
	name?: string;
}

export interface DtoProjectGroupParamsRequest {
	/** Group IDs, optional. At least Projects IDs or Group IDs should be informed. */
	group_ids?: number[];
	/** Project IDs, optional. At least Projects IDs or Group IDs should be informed. */
	project_ids?: number[];
	start_id?: number;
}

export interface DtoProjectGroupResponse {
	group_id?: number;
	id?: number;
	name?: string;
	project_id?: number;
}

export interface DtoProjectProfitability {
	/** Whether the project is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional. A nil entry on this list means that only projects without client will be selected. */
	client_ids?: number[];
	/** Currency, example: "usd". */
	currency: string;
	/** End date, optional, example: time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Project IDS, optional. */
	project_ids?: number[];
	/** Resolution, optional. Can be "day", "week" or "month". */
	resolution?: string;
	/** Rounding, optional, duration rounding settings, premium feature. */
	rounding?: number;
	/** RoundingMinutes, optional, duration rounding minutes settings, premium feature. */
	rounding_minutes?: number;
	/** Start date, optional, example: time.DateOnly. Should be less than End date. */
	start_date?: string;
}

export interface DtoProjectStatusParamsRequest {
	/** Whether the wanted projects statuses are archived, optional, default false. */
	active?: boolean;
	/** Project IDs. */
	ids?: number[];
}

export interface DtoProjectStatusResponse {
	billable_amount?: number;
	billable_seconds?: number;
	currency?: string;
	estimated_seconds?: number;
	id?: number;
	tracked_seconds?: number;
}

export interface DtoProjectUserParamsRequest {
	/** Client IDs, optional. */
	client_ids?: number[];
	/** Project IDs, optional. */
	project_ids?: number[];
	start_id?: number;
}

export interface DtoProjectUserResponse {
	/** Group ID. */
	group_id?: number;
	/** Hourly rate. */
	hourly_rate?: number;
	/** Project user ID. */
	id?: number;
	/** Labor cost. */
	labour_cost?: number;
	/** Project ID. */
	project_id?: number;
	/** User ID. */
	user_id?: number;
}

export interface DtoProjectUsersRequest {
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
}

export interface DtoUserFilterParamsRequest {
	/** Whether the wanted users are active, optional, default true. */
	active?: boolean;
	/** User IDs, optional. */
	ids?: number[];
	/** Cursor to point from where to start the search, it should be a user ID, optional. */
	start?: number;
}

export interface DtoUserFilterResponse {
	deleted_at?: string;
	id?: number;
	name?: string;
}

export interface ExportPayload {
	profile?: boolean;
	timeline?: boolean;
}

export interface GroupNamePayload {
	name?: string;
}

export interface GroupOrganizationGroupResponse {
	at?: string;
	group_id?: number;
	name?: string;
	permissions?: string;
	users?: ModelsOrganizationUserSimple[];
	workspaces?: number[];
}

export interface GroupPayload {
	/** Group name */
	name?: string;
	/** Group users, optional */
	users?: number[];
	/** Group workspaces, optional */
	workspaces?: number[];
}

export interface GroupProjectGroupPayload {
	/** Group ID */
	group_id?: number;
	/** Project ID */
	project_id?: number;
}

export interface GroupsPatchFailure {
	message?: string;
	patch?: GroupsPatchInput;
}

export interface GroupsPatchInput {
	op?: string;
	path?: string;
	value?: number[];
}

export interface GroupsPatchOutput {
	failure?: GroupsPatchFailure[];
	success?: GroupsPatchInput[];
}

export interface HandlercalendarCalendarsResponse {
	calendars?: ModelsCalendar[];
	next_page_token?: string;
}

export interface HandlercalendarEventsResponse {
	events?: ModelsEvent[];
	next_page_token?: string;
}

export interface HandlercalendarFetchedCalendarsResponse {
	fetched_calendars?: number;
}

export interface HandlercalendarPatchCalendar {
	default_planned_task_id?: number;
	default_project_id?: number;
	default_workspace_id?: number;
	/**
	 * The following fields are deprecated but we need to keep them for backward compatibility with previous versions
	 * of mobile apps
	 */
	remind_tracking?: boolean;
	selected?: boolean;
}

export interface HandlercalendarPostDetailsSuggestionRequest {
	event_ids?: number[];
	workspace_id?: number;
}

export interface HandlercalendarPostDetailsSuggestionResponse {
	suggestions?: HandlercalendarPostDetailsSuggestionResponseItem[];
}

export interface HandlercalendarPostDetailsSuggestionResponseItem {
	event_id?: number;
	suggestion?: ModelsSuggestion;
}

export interface HandlercalendarResponse {
	fetched_events?: number;
}

export interface HandlerfavoritesPayload {
	/** @example true */
	billable?: boolean;
	/** @example "Very often used TE" */
	description?: string;
	/** @example 222222 */
	project_id?: number;
	/** @example [100] */
	tag_ids?: number[];
	/** @example 333333 */
	task_id?: number;
	/** @example 111111 */
	workspace_id?: number;
}

export interface HandlergoalsAPIResponse {
	active?: boolean;
	billable?: boolean;
	comparison?: string;
	creator_user_id?: number;
	creator_user_name?: string;
	current_recurrence_end_date?: string;
	current_recurrence_start_date?: string;
	current_recurrence_tracked_seconds?: number;
	end_date?: string;
	goal_id?: number;
	icon?: string;
	last_completed_recurrence_end_date?: string;
	last_notified_at?: string;
	name?: string;
	permissions?: string;
	project_ids?: number[];
	recurrence?: string;
	start_date?: string;
	status?: string;
	streak?: number;
	tag_ids?: number[];
	target_seconds?: number;
	task_ids?: number[];
	team_goal?: boolean;
	user_id?: number;
	user_name?: string;
	workspace_id?: number;
}

export interface HandlergoalsCreatePayload {
	billable?: boolean;
	comparison?: string;
	end_date?: string;
	icon?: string;
	name?: string;
	project_ids?: number[];
	recurrence?: string;
	start_date?: string;
	tag_ids?: number[];
	target_seconds?: number;
	task_ids?: number[];
	user_id?: number;
}

export interface HandlergoalsUpdatePayload {
	active?: boolean;
	comparison?: string;
	end_date?: string;
	icon?: string;
	last_notified_at?: string;
	name?: string;
	target_seconds?: number;
}

export interface I18NMessage {
	default_message?: string;
	id?: string;
	values?: Record<string, string>;
}

export interface InvitationInfo {
	email?: string;
	invitation_id?: number;
	invite_url?: string;
	organization_id?: number;
	recipient_id?: number;
	sender_id?: number;
}

export interface InvitationIntegrationData {
	external_id?: string;
	external_type?: string;
	provider?: string;
}

export interface InvitationPost {
	emails?: string[];
	groups?: number[];
	project_invite?: InvitationProjectInvite;
	workspaces?: InvitationPostWorkspaces[];
}

export interface InvitationPostWorkspaces {
	admin?: boolean;
	integration_data?: InvitationIntegrationData;
	role?: string;
	role_id?: number;
	workspace_id?: number;
}

export interface InvitationProjectInvite {
	manager?: boolean;
	project_id?: number;
	workspace_id?: number;
}

export interface InvitationResult {
	data?: InvitationInfo[];
	messages?: string[];
}

export type JwkSet = object;

export interface MeFeature {
	enabled?: boolean;
	feature_id?: number;
	name?: string;
}

export interface MeUserLocationResponse {
	city?: string;
	city_lat_long?: string;
	country_code?: string;
	country_name?: string;
	state?: string;
}

export interface MeWorkspace {
	features?: MeFeature[];
	workspace_id?: number;
}

export interface MePayload {
	/** User's first day of the week. Sunday: 0, Monday:1, etc. */
	beginning_of_week?: number;
	/** User's country ID */
	country_id?: number;
	/** User's current password (used to change the current password) */
	current_password?: string;
	/** User's default workspace ID */
	default_workspace_id?: number;
	/**
	 * User's email address
	 * @format email
	 */
	email?: string;
	/** User's full name */
	fullname?: string;
	/** User's new password (current one must also be provided) */
	password?: string;
	/** User's timezone */
	timezone?: string;
}

export interface ModelUser {
	/** Whether the user is active or not. */
	active?: boolean;
	/** Avatar file name */
	avatar?: string;
	/** Whether the user is deactivated or not. */
	deactivated?: boolean;
	/** Deleted at date. */
	deleted_at?: string;
	/** Email */
	email?: string;
	/** Full name */
	fullname?: string;
	/** User ID */
	id?: number;
	/** Workspace User ID */
	workspace_user_id?: number;
}

export interface ModelsActions {
	default?: string;
}

export interface ModelsAlert {
	client_id?: number;
	client_name?: string;
	errors?: ModelsAlertError[];
	id?: number;
	object_type?: number;
	project_color?: string;
	project_id?: number;
	project_name?: string;
	receiver_groups?: string;
	receiver_roles?: string;
	receiver_users?: string;
	receivers?: number;
	source_kind?: string;
	threshold?: number;
	threshold_type?: string;
	/**
	 * using pq types is a workaround to enable reading postgres arrays into go types
	 * we should wrap these pq types to avoid polluting our domain
	 */
	thresholds?: string;
	wid?: number;
}

export interface ModelsAlertError {
	code?: string;
	message?: string;
}

export interface ModelsAllPreferences {
	activity_timeline_display_activity?: boolean;
	activity_timeline_grouping_interval?: string;
	activity_timeline_grouping_method?: string;
	activity_timeline_recording_level?: string;
	activity_timeline_sync_events?: boolean;
	/** will be omitted if empty */
	alpha_features?: ModelsAlphaFeature[];
	/** will be omitted if empty */
	analyticsAdvancedFilters?: boolean;
	auto_tracker_delay_enabled?: boolean;
	auto_tracker_delay_in_seconds?: number;
	automatic_tagging?: boolean;
	autotracking_enabled?: boolean;
	/** will be omitted if empty */
	beginningOfWeek?: number;
	calendar_snap_duration?: string;
	calendar_snap_initial_location?: string;
	calendar_visible_hours_end?: number;
	calendar_visible_hours_start?: number;
	calendar_zoom_level?: string;
	cell_swipe_actions_enabled?: boolean;
	charts_view_type?: string;
	/** will be omitted if empty */
	collapseDetailedReportEntries?: boolean;
	/** will be omitted if empty */
	collapseTimeEntries?: boolean;
	dashboards_view_type?: string;
	date_format?: string;
	/** will be omitted if empty */
	decimal_separator?: string;
	default_project_id?: number;
	default_task_id?: number;
	/** will be omitted if empty */
	displayDensity?: string;
	/** will be omitted if empty */
	distinctRates?: string;
	duration_format?: string;
	duration_format_on_timer_duration_field?: boolean;
	edit_popup_integration_timer?: boolean;
	extension_send_error_reports?: boolean;
	extension_send_usage_statistics?: boolean;
	/** will be omitted if empty */
	firstSeenBusinessPromo?: number;
	focus_app_on_time_entry_started?: boolean;
	focus_app_on_time_entry_stopped?: boolean;
	haptic_feedback_enabled?: boolean;
	/** will be omitted if empty */
	hide_keyboard_shortcut?: boolean;
	idle_detection_enabled?: boolean;
	idle_detection_interval_in_minutes?: number;
	inactivity_behavior?: string;
	is_goals_view_expanded?: boolean;
	is_goals_view_shown?: boolean;
	is_summary_total_view_visible?: boolean;
	keep_mini_timer_on_top?: boolean;
	keep_window_on_top?: boolean;
	keyboard_increment_timer_page?: number;
	/** will be omitted if empty */
	keyboard_shortcuts_enabled?: boolean;
	keyboard_shortcuts_share_time_entries?: boolean;
	macos_auto_tracking_rules?: UtilsMacOSAutoTrackingRules;
	macos_show_hide_toggl_keyboard_shortcut?: UtilsKeyboardShortcut;
	macos_stop_continue_keyboard_shortcut?: UtilsKeyboardShortcut;
	/** will be omitted if empty */
	manualEntryMode?: string;
	/** will be omitted if empty */
	manualMode?: boolean;
	/** will be omitted if empty */
	manualModeOverlaySeen?: boolean;
	modify_on_start_time_change?: string;
	/** will be omitted if empty */
	offlineMode?: string;
	pg_time_zone_name?: string;
	pomodoro_auto_start_break?: boolean;
	pomodoro_auto_start_focus?: boolean;
	pomodoro_break_interval_in_minutes?: number;
	pomodoro_break_project_id?: number;
	pomodoro_break_start_sound_enabled?: boolean;
	pomodoro_break_tag_id?: number;
	pomodoro_countdown_timer?: boolean;
	pomodoro_enabled?: boolean;
	pomodoro_focus_interval_in_minutes?: number;
	pomodoro_focus_sound?: string;
	pomodoro_global_sound_enabled?: boolean;
	pomodoro_interval_end_sound?: boolean;
	pomodoro_interval_end_volume?: number;
	pomodoro_longer_break_duration_in_minutes?: number;
	pomodoro_prevent_screen_lock?: boolean;
	pomodoro_rounds_before_longer_break?: number;
	pomodoro_session_start_sound_enabled?: boolean;
	pomodoro_show_notifications?: boolean;
	pomodoro_stop_timer_at_interval_end?: boolean;
	pomodoro_track_breaks_as_time_entries?: boolean;
	/** will be omitted if empty */
	projectDashboardActivityMode?: string;
	project_shortcut_enabled?: boolean;
	record_timeline?: boolean;
	remember_last_project?: string;
	reminder_days?: string;
	reminder_enabled?: boolean;
	reminder_interval_in_minutes?: number;
	reminder_period?: string;
	reminder_snoozing_in_minutes?: number;
	/** will be omitted if empty */
	reportRounding?: boolean;
	/** will be omitted if empty */
	reportRoundingDirection?: string;
	/** will be omitted if empty */
	reportRoundingStepInMinutes?: number;
	/** will be omitted if empty */
	reportsHideWeekends?: boolean;
	run_app_on_startup?: boolean;
	running_entry_warning?: string;
	running_timer_notification_enabled?: boolean;
	/** will be omitted if empty */
	seenFollowModal?: boolean;
	/** will be omitted if empty */
	seenFooterPopup?: boolean;
	/** will be omitted if empty */
	seenProjectDashboardOverlay?: boolean;
	/** will be omitted if empty */
	seenTogglButtonModal?: boolean;
	send_daily_project_invites?: boolean;
	send_product_emails?: boolean;
	send_timer_notifications?: boolean;
	send_weekly_report?: boolean;
	sharing_shortcut_enabled?: boolean;
	/** will be omitted if empty */
	showTimeInTitle?: boolean;
	show_all_entries?: boolean;
	show_changelog?: boolean;
	show_description_in_menu_bar?: boolean;
	show_dock_icon?: boolean;
	show_events_in_calendar?: boolean;
	show_project_in_menu_bar?: boolean;
	show_qr_scanner?: boolean;
	show_seconds_in_menu_bar?: boolean;
	/** will be omitted if empty */
	show_timeline_in_day_view?: boolean;
	show_timer_in_menu_bar?: boolean;
	show_today_total_in_menu_bar?: boolean;
	/** will be omitted if empty */
	show_total_billable_hours?: boolean;
	/** will be omitted if empty */
	show_weekend_on_timer_page?: boolean;
	show_workouts_in_calendar?: boolean;
	sleep_behaviour?: string;
	smart_alerts_option?: string;
	/** will be omitted if empty */
	snowballReportRounding?: string;
	stack_times_on_manual_mode_after?: string;
	start_automatically?: boolean;
	start_shortcut_mode?: string;
	stop_at_specific_time?: boolean;
	stop_automatically?: boolean;
	stop_entry_on_shutdown?: boolean;
	stop_specified_time?: string;
	stopped_timer_notification_enabled?: boolean;
	suggestions_enabled?: boolean;
	/** will be omitted if empty */
	summaryReportAmounts?: string;
	/** will be omitted if empty */
	summaryReportDistinctRates?: boolean;
	/** will be omitted if empty */
	summaryReportGrouping?: string;
	/** will be omitted if empty */
	summaryReportSortAsc?: boolean;
	/** will be omitted if empty */
	summaryReportSortField?: string;
	/** will be omitted if empty */
	summaryReportSubGrouping?: string;
	summary_total_mode?: string;
	tags_shortcut_enabled?: boolean;
	/** will be omitted if empty */
	theme?: string;
	time_entry_display_mode?: string;
	time_entry_ghost_suggestions_enabled?: boolean;
	time_entry_invitations_notification_enabled?: boolean;
	time_entry_start_stop_input_mode?: string;
	timeofday_format?: string;
	/** will be omitted if empty */
	timerView?: string;
	/** will be omitted if empty */
	timerViewMobile?: string;
	/** ToSAcceptNeeded represents the trigger for new ToS accept dialog */
	toSAcceptNeeded?: boolean;
	use_mini_timer?: boolean;
	/** will be omitted if empty */
	visibleFooter?: string;
	/** will be omitted if empty */
	webTimeEntryStarted?: boolean;
	/** will be omitted if empty */
	webTimeEntryStopped?: boolean;
	/** will be omitted if empty */
	weeklyReportGrouping?: string;
	/** will be omitted if empty */
	weeklyReportValueToShow?: string;
	windows_auto_tracking_rules?: UtilsWindowsAutoTrackingRules;
	windows_show_hide_toggl_keyboard_shortcut?: UtilsKeyboardShortcut;
	windows_stop_continue_keyboard_shortcut?: UtilsKeyboardShortcut;
	windows_stop_start_keyboard_shortcut?: UtilsKeyboardShortcut;
	windows_theme?: string;
	workout_default_project_id?: number;
	workout_default_tag_id?: number;
}

export interface ModelsAlphaFeature {
	/** Feature ID */
	alpha_feature_id?: number;
	/** Feature code */
	code?: string;
	/** Time of deletion, omitted if empty */
	deleted_at?: string;
	/** Feature description, omitted if empty */
	description?: string;
	/** Whether the feature is enabled */
	enabled?: boolean;
}

export interface ModelsAvatar {
	avatar_urls?: ModelsImageURLs;
	fileType?: string;
	name?: string;
}

export interface ModelsCalendar {
	background_color?: string;
	calendar_id?: number;
	calendar_integration_id?: number;
	created_at?: string;
	default_planned_task_id?: number;
	default_project_id?: number;
	default_workspace_id?: number;
	deleted_at?: string;
	external_id?: string;
	foreground_color?: string;
	name?: string;
	/**
	 * The following fields are deprecated but we need to keep them for backward compatibility with previous versions
	 * of mobile apps
	 */
	remind_tracking?: boolean;
	selected?: boolean;
	updated_at?: string;
}

export interface ModelsCampaign {
	discount?: number;
	end?: string;
	key?: string;
	name?: string;
	start?: string;
}

export interface ModelsCardDetails {
	added_at?: string;
	card_number?: string;
	card_type?: string;
	creator_id?: number;
	creator_name?: string;
	expiry_date?: string;
	holder_name?: string;
}

export interface ModelsClient {
	/** IsArchived is true if the client is archived */
	archived?: boolean;
	/** When was the last update */
	at?: string;
	/** CreatorID is the ID of the user who created the client */
	creator_id?: number;
	/** Client ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Name of the client */
	name?: string;
	notes?: string;
	/** List of authorization permissions for this client. */
	permissions?: string;
	/** Workspace ID */
	wid?: number;
}

export interface ModelsContactDetail {
	company_address?: string;
	company_city?: string;
	company_name?: string;
	contact_detail_id?: number;
	contact_email?: string;
	contact_person?: string;
	country_id?: number;
	country_subdivision_id?: number;
	created_at?: string;
	customer_id?: number;
	is_eu_resident?: boolean;
	updated_at?: string;
	user_id?: number;
	vat_number?: string;
	/** DEPRECATED */
	vat_number_valid?: boolean;
	/** DEPRECATED */
	vat_number_validated_at?: string;
	zip_code?: string;
}

export interface ModelsCountry {
	country_code?: string;
	default_currency_id?: number;
	id?: number;
	name?: string;
	requires_postal_code?: boolean;
	vat_applicable?: boolean;
	vat_percentage?: number;
	vat_regex?: string;
}

export interface ModelsCsvUpload {
	at?: string;
	log_id?: number;
}

export interface ModelsCurrency {
	/** @example 0 */
	currency_id?: number;
	/** @example "EUR" */
	iso_code?: string;
	/** @example "€" */
	symbol?: string;
}

export interface ModelsDiscountRequestResponses {
	negative_answers: string[];
	negative_feedback?: string;
	positive_answers: string[];
	positive_feedback?: string;
}

export interface ModelsDownloadRequestRecord {
	error_message?: string;
	state?: string;
	token?: string;
}

export interface ModelsEvent {
	all_day?: boolean;
	background?: string;
	calendar_event_id?: number;
	calendar_id?: number;
	created_at?: string;
	deleted_at?: string;
	end_time?: string;
	external_id?: string;
	foreground?: string;
	html_link?: string;
	/**
	 * This is an unique ID used to avoid duplicate events when getting information
	 * from multiple sources. E. G. the mobile may get calendar events without BE integration,
	 * so they should be able to tell if an event is repeated.
	 */
	ical_uid?: string;
	start_time?: string;
	title?: string;
	updated?: string;
	updated_at?: string;
}

export interface ModelsFavorite {
	billable?: boolean;
	/** Related entities meta fields - if requested */
	client_name?: string;
	created_at?: string;
	deleted_at?: string;
	description?: string;
	favorite_id?: number;
	permissions?: string;
	project_active?: boolean;
	project_billable?: boolean;
	project_color?: string;
	project_id?: number;
	project_name?: string;
	public?: boolean;
	rank?: number;
	tag_ids?: ModelsIntArray;
	task_id?: number;
	task_name?: string;
	user_id?: number;
	was_public_at?: string;
	workspace_id?: number;
}

export interface ModelsGoal {
	active?: boolean;
	billable?: boolean;
	comparison?: string;
	creatorUserID?: number;
	creatorUserName?: string;
	currentRecurrenceEndDate?: string;
	currentRecurrenceStartDate?: string;
	currentRecurrenceTrackedSeconds?: number;
	endDate?: string;
	icon?: string;
	id?: number;
	lastCompletedRecurrenceEndDate?: string;
	lastNotifiedAt?: string;
	name?: string;
	permissions?: string;
	projectIDs?: UtilsInt64Slice;
	recurrence?: string;
	startDate?: string;
	status?: string;
	streak?: number;
	tagIDs?: UtilsInt64Slice;
	targetSeconds?: number;
	taskIDs?: UtilsInt64Slice;
	teamGoal?: boolean;
	userID?: number;
	userName?: string;
	workspaceID?: number;
}

export interface ModelsGroup {
	at?: string;
	id?: number;
	name?: string;
	permissions?: string;
	workspace_id?: number;
}

export interface ModelsGroupDict {
	group_id?: number;
	name?: string;
}

export type ModelsImageURLs = Record<string, string>;

export type ModelsIntArray = number[];

export interface ModelsIntegration {
	auto_track?: boolean;
	calendar_integration_id?: number;
	created_at?: string;
	email?: string;
	error_status?: string;
	provider?: string;
}

export interface ModelsInvitation {
	code?: string;
	email?: string;
	organization_id?: number;
	sender_email?: string;
	sender_name?: string;
}

export interface ModelsLogo {
	logo?: string;
}

export interface ModelsMeOrganization {
	/** Whether the requester is an admin of the organization */
	admin?: boolean;
	/**
	 * Organization's last modification date
	 * @format date-time
	 */
	at?: string;
	/**
	 * Organization's creation date
	 * @format date-time
	 */
	created_at?: string;
	/** Organization ID */
	id?: number;
	/** Is true when the organization option is_multi_workspace_enabled is set */
	is_multi_workspace_enabled?: boolean;
	is_unified?: boolean;
	/** How far back free workspaces in this org can access data. */
	max_data_retention_days?: number;
	/** Maximum number of workspaces allowed for the organization */
	max_workspaces?: number;
	/** Organization Name */
	name?: string;
	/** Whether the requester is a the owner of the organization */
	owner?: boolean;
	permissions?: string;
	/** The subscription plan is an enterprise plan */
	pricing_plan_enterprise?: boolean;
	/** Organization plan ID */
	pricing_plan_id?: number;
	/** The subscription plan name the org is currently on. Free or any plan name coming from payment provider */
	pricing_plan_name?: string;
	/** Whether the organization is currently suspended */
	suspended_at?: string;
	trial_info?: ModelsTrialInfo;
	/** Number of organization users */
	user_count?: number;
}

export interface ModelsMobileFeedback {
	attachment?: number[];
	attachment_name?: string;
	data?: ModelsMobileFeedbackData[];
	email?: string;
	intercomEnabled?: boolean;
	message?: string;
	userID?: number;
}

export interface ModelsMobileFeedbackData {
	key?: string;
	value?: string;
}

export interface ModelsMostActiveUser {
	duration?: number;
	user_id?: number;
}

export type ModelsOptions = Record<string, string>;

export interface ModelsOrgUser {
	/** Deprecated, to be removed. Use RoleID, or IsAdmin method if you must access this field. */
	admin?: boolean;
	avatar_url?: string;
	can_edit_email?: boolean;
	email?: string;
	groups?: ModelsGroupDict[];
	id?: number;
	inactive?: boolean;
	invitation_code?: string;
	joined?: boolean;
	name?: string;
	organization_id?: number;
	/** Deprecated, to be removed. Use RoleID, or IsOwner method if you must access this field. */
	owner?: boolean;
	role_id?: number;
	user_id?: number;
	workspace_count?: number;
	workspaces?: ModelsOrgUserWorkspace[];
}

export interface ModelsOrgUserWorkspace {
	/** Deprecated, to be removed.  Use RoleID, or IsAdmin method if you must access this field. */
	admin?: boolean;
	cost?: number;
	default_currency?: string;
	groups?: ModelsGroupDict[];
	inactive?: boolean;
	rate?: number;
	/** Deprecated, to be removed */
	role?: string;
	role_id?: number;
	working_hours?: number;
	workspace_id?: number;
	workspace_name?: string;
	workspace_user_id?: number;
}

export interface ModelsOrganizationOwner {
	avatar_url?: string;
	email?: string;
	id?: number;
	name?: string;
	organization_id?: number;
	organization_user_id?: number;
	user_id?: number;
}

export interface ModelsOrganizationSegmentation {
	demo_requested?: boolean;
	full_name?: string;
	heard?: string;
	industries?: string;
	members_range?: string;
	organization_id?: number;
	reasons?: string;
	skipped_step?: string;
	user_id?: number;
}

export interface ModelsOrganizationUserSimple {
	avatar_url?: string;
	inactive?: boolean;
	joined?: boolean;
	name?: string;
	user_id?: number;
}

export interface ModelsPaymentDetail {
	created_at?: string;
	currency?: string;
	customer_id?: number;
	payment_type?: string;
	reference?: string;
	user_id?: number;
}

export interface ModelsPaymentInfo {
	created_at?: string;
	description?: string;
	id?: number;
	status?: string;
}

export interface ModelsPeriod {
	created_at?: string;
	finished_on?: string;
	started_on?: string;
	subscription_id?: number;
	subscription_period_id?: number;
	trial?: boolean;
	user_count?: number;
}

export interface ModelsPlanFeature {
	description?: string;
	feature_id?: number;
	is_default_feature?: boolean;
	name?: string;
	trial_only?: boolean;
}

export interface ModelsPlanWithFeatures {
	active_at?: string;
	features?: ModelsPlanFeature[];
	inactive_at?: string;
	max_user_count?: number;
	name?: string;
	plan_at?: string;
	plan_id?: number;
	product_handle?: string;
	toggl_product_name?: string;
}

export interface ModelsPostPayload {
	/** Name of the organization */
	name?: string;
	/** Name of the workspace */
	workspace_name?: string;
}

export interface ModelsProject {
	/** Whether the project is active or archived */
	active?: boolean;
	/** Actual hours */
	actual_hours?: number | null;
	/** Actual seconds */
	actual_seconds?: number | null;
	/** Last updated date */
	at?: string;
	/** Whether estimates are based on task hours, premium feature */
	auto_estimates?: boolean | null;
	/** Whether the project is billable, premium feature */
	billable?: boolean | null;
	can_track_time?: boolean;
	/** Client ID legacy field */
	cid?: number;
	/** Client ID */
	client_id?: number | null;
	/** Color */
	color?: string;
	/** Creation date */
	created_at?: string;
	/** Currency, premium feature */
	currency?: string | null;
	/** Current project period, premium feature */
	current_period?: ModelsRecurringPeriod;
	/** End date */
	end_date?: string;
	/** Estimated hours */
	estimated_hours?: number | null;
	/** Estimated seconds */
	estimated_seconds?: number | null;
	/** Fixed fee, premium feature */
	fixed_fee?: number;
	/** Project ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Whether the project is private */
	is_private?: boolean;
	/** Shared Project */
	is_shared?: boolean;
	/** Name */
	name?: string;
	permissions?: string;
	pinned?: boolean;
	/** Hourly rate */
	rate?: number;
	/** Last date for rate change */
	rate_last_updated?: string | null;
	/** Whether the project is recurring, premium feature */
	recurring?: boolean;
	/** Project recurring parameters, premium feature */
	recurring_parameters?: ModelsRecurringProjectParameters[];
	shared_at?: string;
	shared_hash?: string;
	/** Start date */
	start_date?: string;
	/** Status of the project (upcoming, active, ended, archived, deleted) */
	status?: string;
	/** Whether the project is used as template, premium feature */
	template?: boolean | null;
	/** Template ID */
	template_id?: number | null;
	/** Workspace ID legacy field */
	wid?: number;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsProjectGroup {
	group_id?: number;
	id?: number;
	pid?: number;
	wid?: number;
}

export interface ModelsProjectStatistics {
	earliest_time_entry?: string;
	latest_time_entry?: string;
}

export interface ModelsProjectUser {
	/** When was last modified */
	at?: string;
	/** Group ID, legacy field */
	gid?: number;
	/** Group ID */
	group_id?: number;
	/** Project User ID */
	id?: number;
	/** Custom labor cost for project user */
	labor_cost?: number | null;
	/** Date for labor cost last updated */
	labor_cost_last_updated?: string;
	/** Labour cost for this project user -> DEPRECATED */
	labour_cost?: number;
	/** Whether the user is manager of the project */
	manager?: boolean;
	/** Project ID */
	project_id?: number;
	/** Custom rate for project user */
	rate?: number | null;
	/** Date for rate last updated */
	rate_last_updated?: string;
	/** User ID */
	user_id?: number;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsPutPayload {
	/** Name of the organization */
	name?: string;
}

export interface ModelsRate {
	/** Amount of the rate */
	amount?: number;
	/** Creation date of the rate */
	created_at?: string;
	creatorID?: number;
	/** Deletion date of the rate, in case that is null it means the rates is active */
	deleted_at?: string;
	/** End date time of the rate */
	end?: string;
	/** Identifier of the rate */
	id?: number;
	/** Planned task ID which the rate is applied */
	planned_task_id?: number;
	/** Project ID which the rate is applied */
	project_id?: number;
	/** Project user ID which the rate is applied */
	project_user_id?: number;
	/** Start date time of the rate */
	start?: string;
	type?: string;
	/** Last update date of the rate */
	updated_at?: string;
	/** Workspace ID which the rate is applied */
	workspace_id?: number;
	/** Workspace user ID which the rate is applied */
	workspace_user_id?: number;
}

export interface ModelsRecurringPeriod {
	end_date?: string;
	start_date?: string;
}

export interface ModelsRecurringProjectParameters {
	/** Custom period, used when "period" field is "custom" */
	custom_period?: number;
	/** Estimated seconds */
	estimated_seconds?: number;
	/** Recurring end date */
	parameter_end_date?: string | null;
	/** Recurring start date */
	parameter_start_date?: string;
	/** Period */
	period?: string;
	/** Project start date */
	project_start_date?: string;
}

export interface ModelsSSOInvitation {
	/**
	 * AccountsSignupURL is a legacy field, should be removed one more after
	 * this issue gets done https://github.com/toggl/accounts-fe/issues/704
	 */
	accounts_signup_url?: string;
	code?: string;
	email?: string;
	organization_id?: number;
	sender_email?: string;
	sender_name?: string;
	sso?: boolean;
	token?: string;
}

export interface ModelsSavedReport {
	deleted_at?: string;
	fixed_daterange?: boolean;
	id?: number;
	isNAResource?: boolean;
	name?: string;
	params?: string;
	public?: boolean;
	scheduled_email_gids?: UtilsInt64Slice;
	scheduled_email_uids?: UtilsInt64Slice;
	token?: string;
	uid?: number;
	updated_at?: string;
	updated_by?: number;
}

export interface ModelsScheduledReport {
	bookmark_id?: number;
	created_at?: string;
	creator_id?: number;
	deleted_at?: string;
	frequency?: number;
	group_ids?: number[];
	report_id?: number;
	user_ids?: number[];
	workspace_id?: number;
}

export interface ModelsSharedProject {
	/** Whether the project is active or archived */
	active?: boolean;
	/** Actual hours */
	actual_hours?: number | null;
	/** Actual seconds */
	actual_seconds?: number | null;
	/** Last updated date */
	at?: string;
	/** Whether estimates are based on task hours, premium feature */
	auto_estimates?: boolean | null;
	/** Whether the project is billable, premium feature */
	billable?: boolean | null;
	can_track_time?: boolean;
	/** Client ID legacy field */
	cid?: number;
	/** Client ID */
	client_id?: number | null;
	/** Color */
	color?: string;
	/** Creation date */
	created_at?: string;
	/** Currency, premium feature */
	currency?: string | null;
	/** Current project period, premium feature */
	current_period?: ModelsRecurringPeriod;
	/** End date */
	end_date?: string;
	/** Estimated hours */
	estimated_hours?: number | null;
	/** Estimated seconds */
	estimated_seconds?: number | null;
	/** Fixed fee, premium feature */
	fixed_fee?: number;
	/** Project ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Whether the project is private */
	is_private?: boolean;
	/** Shared Project */
	is_shared?: boolean;
	/** Name */
	name?: string;
	permissions?: string;
	pinned?: boolean;
	/** Hourly rate */
	rate?: number;
	/** Last date for rate change */
	rate_last_updated?: string | null;
	/** Whether the project is recurring, premium feature */
	recurring?: boolean;
	/** Project recurring parameters, premium feature */
	recurring_parameters?: ModelsRecurringProjectParameters[];
	shared_at?: string;
	shared_hash?: string;
	/** Start date */
	start_date?: string;
	/** Status of the project (upcoming, active, ended, archived, deleted) */
	status?: string;
	tasks?: ModelsTask[];
	/** Whether the project is used as template, premium feature */
	template?: boolean | null;
	/** Template ID */
	template_id?: number | null;
	/** Workspace ID legacy field */
	wid?: number;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsSimpleWorkspaceUser {
	/** Email of the user */
	email?: string;
	/** Name of the user */
	fullname?: string;
	/** Global user identifier */
	id?: number;
	/** internal */
	inactive?: boolean;
	/** internal */
	is_active?: boolean;
	/** Flag indicating if user is admin */
	is_admin?: boolean;
	/** Role of the user */
	role?: string;
}

export interface ModelsStatistics {
	admins?: ModelsUserData[];
	groups_count?: number;
	members_count?: number;
}

export interface ModelsSubdivision {
	company_id?: number;
	country_id?: number;
	country_subdivision_id?: number;
	iso_code?: string;
	name?: string;
}

export interface ModelsSubscription {
	auto_renew?: boolean;
	card_details?: ModelsCardDetails;
	company_id?: number;
	contact_detail?: ModelsContactDetail;
	/** @format date-time */
	created_at?: string;
	currency?: string;
	customer_id?: number;
	/** @format date-time */
	deleted_at?: string;
	last_pricing_plan_id?: number;
	organization_id?: number;
	payment_details?: ModelsPaymentDetail;
	pricing_plan_id?: number;
	/** @format date-time */
	renewal_at?: string;
	subscription_id?: number;
	subscription_period?: ModelsPeriod;
	workspace_id?: number;
}

export interface ModelsSuggestion {
	accuracy?: number;
	billable?: boolean;
	description_match?: boolean;
	last_seen?: string;
	project_id?: number;
	tag_ids?: number[];
	task_id?: number;
	workspace_id?: number;
}

export interface ModelsTag {
	/** When was created/last modified */
	at?: string;
	/** CreatorID the user who created the tag */
	creator_id?: number;
	/**
	 * When was deleted
	 * @format date-time
	 */
	deleted_at?: string;
	/** Tag ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Tag name */
	name?: string;
	permissions?: string;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsTask {
	/** False when the task has been done */
	active?: boolean;
	/** When the task was created/last modified */
	at?: string;
	client_name?: string | null;
	/** Estimation time for this task in seconds */
	estimated_seconds?: number | null;
	/** Task ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Task Name */
	name?: string;
	permissions?: string;
	/** Metadata */
	project_color?: string;
	/** Project ID */
	project_id?: number;
	project_name?: string;
	/** Rate for this task */
	rate?: number;
	/** Last date for rate change */
	rate_last_updated?: string | null;
	/** Whether this is a recurring task */
	recurring?: boolean;
	/** Task assignee, if set above this will be the toggl_account_id for that user */
	toggl_accounts_id?: string | null;
	/** The value tracked_seconds is in milliseconds, not in seconds. */
	tracked_seconds?: number;
	/** Task assignee, if available */
	user_id?: number | null;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsTimeEntry {
	/** When was last updated */
	at?: string;
	/** Whether the time entry is marked as billable */
	billable?: boolean;
	/** Related entities meta fields - if requested */
	client_name?: string;
	/** Time Entry description, null if not provided at creation/update */
	description?: string | null;
	/** Time entry duration. For running entries should be negative, preferable -1 */
	duration?: number;
	/** Used to create a TE with a duration but without a stop time, this field is deprecated for GET endpoints where the value will always be true. */
	duronly?: boolean;
	/** Time Entry ID */
	id?: number;
	/** Permission list */
	permissions?: string[];
	/** Project ID, legacy field */
	pid?: number;
	project_active?: boolean;
	project_billable?: boolean;
	project_color?: string;
	/** Project ID. Can be null if project was not provided or project was later deleted */
	project_id?: number | null;
	project_name?: string;
	/** Indicates who the time entry has been shared with */
	shared_with?: ModelsTimeEntrySharedWith[];
	/** Start time in UTC */
	start?: string;
	/** Stop time in UTC, can be null if it's still running or created with "duration" and "duronly" fields */
	stop?: string;
	/** Tag IDs, null if tags were not provided or were later deleted */
	tag_ids?: number[];
	/** Tag names, null if tags were not provided or were later deleted */
	tags?: string[];
	/** Task ID. Can be null if task was not provided or project was later deleted */
	task_id?: number | null;
	task_name?: string;
	/** Task ID, legacy field */
	tid?: number;
	/** Time Entry creator ID, legacy field */
	uid?: number;
	user_avatar_url?: string;
	/** Time Entry creator ID */
	user_id?: number;
	user_name?: string;
	/** Workspace ID, legacy field */
	wid?: number;
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsTimeEntryConstraints {
	description_present?: boolean;
	project_present?: boolean;
	tag_present?: boolean;
	task_present?: boolean;
	time_entry_constraints_enabled?: boolean;
}

export interface ModelsTimeEntryNotes {
	/** Time Entry ID */
	id?: number;
	/** Notes */
	notes?: string;
}

export interface ModelsTimeEntrySharedWith {
	accepted?: boolean;
	user_id?: number;
	user_name?: string;
}

export interface ModelsTimelineEvent {
	desktop_id?: string;
	end_time?: number;
	filename?: string;
	id?: number;
	idle?: boolean;
	start_time?: number;
	title?: string;
}

export interface ModelsTimelineSettings {
	record_timeline?: boolean;
}

export interface ModelsTimesheet {
	approvedOrRejectedAt?: string;
	approvedOrRejectedID?: number;
	createdAt?: string;
	deletedAt?: string;
	rejectionComment?: string;
	reminderSentAt?: string;
	startDate?: string;
	status?: string;
	submittedAt?: string;
	timesheetSetupID?: number;
	timezone?: string;
	updatedAt?: string;
	workingHoursInMinutes?: number;
	workspaceID?: number;
}

export interface ModelsTimesheetSetupError {
	code?: string;
	message?: string;
}

export interface ModelsTimezone {
	name?: string;
	utc?: string;
}

export interface ModelsTogglUser {
	/** will be omitted if empty */
	api_token?: string;
	/** @format date-time */
	at?: string;
	beginning_of_week?: number;
	country_id?: number;
	/** @format date-time */
	created_at?: string;
	default_workspace_id?: number;
	/** @format email */
	email?: string;
	fullname?: string;
	has_password?: boolean;
	id?: number;
	/** @example "http://example.com" */
	image_url?: string;
	/** @format email */
	openid_email?: string;
	openid_enabled?: boolean;
	/** will be omitted if empty */
	options?: ModelsOptions;
	timezone?: string;
	/** @format date-time */
	updated_at?: string;
}

export interface ModelsTrackReminder {
	/** Reminder creation time */
	created_at?: string;
	/** Frequency of the reminder in days, should be either 1 or 7 */
	frequency?: number;
	/** Groups IDs to send the reminder to */
	group_ids?: number[];
	/** Reminder ID */
	reminder_id?: number;
	/** Threshold is the number of hours after which the reminder will be sent */
	threshold?: number;
	/** User IDs to send the reminder to */
	user_ids?: number[];
	/** Workspace ID */
	workspace_id?: number;
}

export interface ModelsTransfer {
	created_at?: string;
	current_owner_accepted?: boolean;
	current_owner_answered_at?: string;
	current_owner_id?: number;
	finished_at?: string;
	new_owner_accepted?: boolean;
	new_owner_answered_at?: string;
	new_owner_id?: number;
	organization_id?: number;
	outcome_name?: string;
	owner_transfer_id?: number;
	requester_id?: number;
}

export interface ModelsTrialInfo {
	/** CanHaveInitialTrial is true if neither the organization nor the owner has never had a trial before */
	can_have_trial?: boolean;
	/** What was the previous plan before the trial */
	last_pricing_plan_id?: number | null;
	/** When the trial payment is due */
	next_payment_date?: string | null;
	/** Whether the organization's subscription is currently on trial */
	trial?: boolean;
	/** When a trial is available for this organization */
	trial_available?: boolean;
	/** When the trial ends */
	trial_end_date?: string | null;
}

export interface ModelsUnifiedSubscriptionInvoice {
	/** @format date-time */
	creation_date?: string;
	currency?: string;
	description?: string;
	hosted_url?: string;
	id?: string;
	invoice_number?: string;
	pdf_url?: string;
	status?: string;
	total_amount?: number;
}

export interface ModelsUnifiedSubscriptionInvoiceList {
	items?: ModelsUnifiedSubscriptionInvoice[];
	next?: string;
}

export interface ModelsUserData {
	name?: string;
	user_id?: number;
}

export interface ModelsUserInvoice {
	billing_address?: string;
	created_at?: string;
	currency?: string;
	date?: string;
	deleted_at?: string;
	document_id?: string;
	due_date?: string;
	/** Integrations data */
	integration_provider?: string;
	items?: ModelsUserInvoiceItem[];
	message?: string;
	payment_terms?: string;
	purchase_number?: string;
	taxes?: ModelsUserInvoiceTax[];
	updated_at?: string;
	user_id?: number;
	user_invoice_id?: number;
	workspace_address?: string;
	workspace_id?: number;
	workspace_logo?: string;
}

export interface ModelsUserInvoiceItem {
	amount?: number;
	description?: string;
	item_id?: number;
	quantity?: number;
}

export interface ModelsUserInvoiceTax {
	amount?: number;
	name?: string;
	tax_id?: number;
}

export interface ModelsUserNotification {
	actions?: ModelsActions;
	class?: number;
	content?: I18NMessage;
	created_at?: string;
	id?: number;
	notification_type?: string;
	organization_id?: number;
	read_at?: string;
	title?: I18NMessage;
	user_id?: number;
	workspace_id?: number;
}

export interface ModelsWorkspace {
	/** Current user is workspace admin */
	admin?: boolean;
	/** deprecated */
	api_token?: string;
	/** Timestamp of last workspace change */
	at?: string;
	/** Workspace on Premium subscription */
	business_ws?: boolean;
	/** CSV upload data */
	csv_upload?: ModelsCsvUpload;
	/** Default currency, premium feature, optional, only for existing WS, will be 'USD' initially */
	default_currency?: string;
	/** The default hourly rate, premium feature, optional, only for existing WS, will be 0.0 initially */
	default_hourly_rate?: number;
	hide_start_end_times?: boolean;
	/** Calendar integration enabled */
	ical_enabled?: boolean;
	/** URL of calendar */
	ical_url?: string;
	/** Identifier of the workspace */
	id?: number;
	/** Last modification of data in the workspace */
	last_modified?: string;
	/** URL of workspace logo */
	logo_url?: string;
	/** How far back free workspaces can access data. */
	max_data_retention_days?: number;
	/** Name of the workspace */
	name?: string;
	/** Only admins will be able to create projects, optional, only for existing WS, will be false initially */
	only_admins_may_create_projects?: boolean;
	/** Only admins will be able to create tags, optional, only for existing WS, will be false initially */
	only_admins_may_create_tags?: boolean;
	/** Whether only admins will be able to see billable rates, premium feature, optional, only for existing WS. Will be false initially */
	only_admins_see_billable_rates?: boolean;
	/** Only admins will be able to see the team dashboard, optional, only for existing WS, will be false initially */
	only_admins_see_team_dashboard?: boolean;
	/** Identifier of the organization */
	organization_id?: number;
	/** Permissions list */
	permissions?: string;
	/** Workspace on Starter subscription */
	premium?: boolean;
	/** deprecated */
	profile?: number;
	/** New projects billable by default */
	projects_billable_by_default?: boolean;
	/** Whether tracking time to projects will enforce billable setting to be respected. */
	projects_enforce_billable?: boolean;
	/** Workspace setting for default project visbility. */
	projects_private_by_default?: boolean;
	/** Timestamp of last workspace rate update */
	rate_last_updated?: string;
	/** Whether reports should be collapsed by default, optional, only for existing WS, will be true initially */
	reports_collapse?: boolean;
	/** Role of the current user in the workspace */
	role?: string;
	/** Default rounding, premium feature, optional, only for existing WS. 0 - nearest, 1 - round up, -1 - round down */
	rounding?: number;
	/** Default rounding in minutes, premium feature, optional, only for existing WS */
	rounding_minutes?: number;
	/** deprecated */
	subscription?: ModelsSubscription;
	/**
	 * Timestamp of suspension
	 * @format date-time
	 */
	suspended_at?: string;
	/** Time entry constraints setting */
	te_constraints?: ModelsTimeEntryConstraints;
	/** Working hours in minutes */
	working_hours_in_minutes?: number;
}

export interface ModelsWorkspacePreferences {
	/** Legacy field */
	'annual-master-campaign-2018'?: string;
	/** This workspace works with duration only time entries */
	hide_start_end_times?: boolean;
	/** Time of acceptance of the terms of service */
	inc_tos_accepted_at?: string;
	/** User ID who accepted the terms of service */
	inc_tos_accepted_by?: number;
	/** Pricing plan ID */
	initial_pricing_plan?: number;
	/** Legacy field */
	'january-2018-campaign'?: boolean;
	/** Legacy field */
	master_signup?: boolean;
	/** Date on which "Lock Time Entries" feature was enabled */
	report_locked_at?: string;
	/** Whether SSO is enabled for this workspace */
	single_sign_on?: boolean;
	/** Date on which SSO was requested */
	sso_requested_at?: string;
}

export interface ModelsWorkspaceUser {
	/** Flag indicating if user accepted the invitation */
	active?: boolean;
	/** Flag indicating if user is admin */
	admin?: boolean;
	/** Timestamp of the last update */
	at?: string;
	/** URL of avatar */
	avatar_file_name?: string;
	/** Email of the user */
	email?: string;
	/** List of groups the user belongs to */
	group_ids?: UtilsInt64Slice;
	/** Identifier of the user  workspace */
	id?: number;
	/** Flag indicating if user was deactivated by admin of the workspace */
	inactive?: boolean;
	/** internal */
	invitation_code?: string;
	/** internal */
	invite_url?: string;
	/** Flag indicating if user is a direct member of the workspace (is not assigned to the workspace using the group) */
	is_direct?: boolean;
	/** Labour cost assigned to the user */
	labor_cost?: number;
	/** Timestamp of the last labour cost update */
	labor_cost_last_updated?: string;
	/** Labour cost assigned to the user */
	labour_cost?: number;
	/** Name of the user */
	name?: string;
	/** Flag indicating if user is admin inside organization */
	organization_admin?: boolean;
	/** Rate assigned to the user */
	rate?: number;
	/** Timestamp of the last rate update */
	rate_last_updated?: string;
	/** Role of the user */
	role?: string;
	role_id?: number;
	/** Timezone of the user */
	timezone?: string;
	/** Global user identifier */
	uid?: number;
	/** UserID alternative JSON field, only used by get-organization-workspaces-workspaceusers */
	user_id?: number;
	/** Workspace identifier */
	wid?: number;
	/** Working hours value in minutes */
	working_hours_in_minutes?: number;
	/** Flag indicating if user is admin inside workspace */
	workspace_admin?: boolean;
	/** UserID alternative JSON field, only used by get-organization-workspaces-workspaceusers */
	workspace_id?: number;
}

export interface OauthProfile {
	email?: string;
	id?: string;
	name?: string;
	provider?: string;
}

export interface OrganizationPostOrganizationReply {
	id?: number;
	name?: string;
	permissions?: string;
	workspace_id?: number;
	workspace_name?: string;
}

export interface ProjectPatchInput {
	/** Patch operation to perform, one of "add", "remove", "replace" */
	op?: string;
	/** Path to the field to patch, example: "/color" */
	path?: string;
	/** Value to set when operation is "add" or "replace", example: "#000000". The value type actually depends on the field being patched. */
	value?: object;
}

export interface ProjectPayload {
	/** Whether the project is active or archived */
	active?: boolean;
	/** Whether estimates are based on task hours, optional, premium feature */
	auto_estimates?: boolean;
	/** Whether the project is set as billable, optional, premium feature */
	billable?: boolean;
	/** Client ID, legacy */
	cid?: number;
	/** Client ID, optional */
	client_id?: number;
	/** Client name, optional */
	client_name?: string;
	/** Project color */
	color?: string;
	/** Project currency, optional, premium feature */
	currency?: string;
	/** End date of a project timeframe */
	end_date?: string;
	/** Estimated hours, optional, premium feature */
	estimated_hours?: number;
	/** Project fixed fee, optional, premium feature */
	fixed_fee?: number;
	/** Whether the project is private or not */
	is_private?: boolean;
	/** Shared */
	is_shared?: boolean;
	/** Project name */
	name?: string;
	/** Hourly rate, optional, premium feature */
	rate?: number;
	/** Rate change mode, optional, premium feature. Can be "start-today", "override-current", "override-all" */
	rate_change_mode?: string;
	/** Project is recurring, optional, premium feature */
	recurring?: boolean;
	/** Project recurring parameters, optional, premium feature */
	recurring_parameters?: ProjectRecurringParameters;
	/** Start date of a project timeframe */
	start_date?: string;
	/** Project is template, optional, premium feature */
	template?: boolean;
	/** Template ID, optional */
	template_id?: number;
}

export interface ProjectRecurringParameters {
	/** Recurring custom period, the "period" field must be "custom" */
	custom_period?: number;
	/** Recurring period, example "monthly" */
	period?: string;
	/** Recurring start date */
	project_start_date?: string;
}

export interface ProjectRestoreParams {
	projects?: number[];
	restore_all_projects?: boolean;
}

export interface ProjectsPatchFailure {
	id?: number;
	message?: string;
}

export interface ProjectsPatchOutput {
	failure?: ProjectsPatchFailure[];
	success?: number[];
}

export interface ProjectsPayload {
	project_ids?: number[];
}

export interface ProjectsProjectTrend {
	/** Whether the project is set as billable, optional, premium feature. */
	billable?: boolean;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Previous start date, example time.DateOnly. */
	previous_period_start?: string;
	/** Project IDs, optional. */
	project_ids?: number[];
	/** Rounding, optional, duration rounding settings, premium feature. */
	rounding?: number;
	/** RoundingMinutes, optional, duration rounding minutes settings, premium feature. */
	rounding_minutes?: number;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
}

export interface ProjectsProjectTrends {
	current_period_seconds?: number[];
	previous_period_seconds?: number[];
	project_id?: number;
	start?: string;
	user_ids?: number[];
}

export interface ProjectsReport {
	currency?: string;
	graph?: ProjectsReportGraph;
	table?: ProjectsReportTable;
}

export type ProjectsReportTable = ProjectsReportTableRow[];

export interface ProjectsReportTableRow {
	billable_seconds?: number;
	color?: string;
	currency?: string;
	earnings?: number;
	labour_cost?: number;
	name?: string;
	project_id?: number;
	total_seconds?: number;
}

export interface ProjectsDataTrendsGraph {
	data?: ProjectsDataTrendsGraphData[];
	resolution?: string;
}

export interface ProjectsDataTrendsGraphData {
	date?: string;
	projects?: ProjectsDataTrendsProject[];
}

export interface ProjectsDataTrendsProject {
	billable_seconds?: number;
	color?: string;
	currency?: string;
	earnings?: number;
	name?: string;
	project_id?: number;
	total_seconds?: number;
}

export interface ProjectsDataTrendsReport {
	currency?: string;
	graph?: ProjectsDataTrendsGraph;
}

export type ProjectsGraphArray = ProjectsGraphItem[];

export interface ProjectsGraphItem {
	date?: string;
	earnings?: number;
	labour_cost?: number;
}

export type ProjectsPatchPost = ProjectPatchInput[];

export interface ProjectsPinnedProjectPayload {
	pin?: boolean;
}

export interface ProjectsReportGraph {
	data?: ProjectsGraphArray;
	resolution?: string;
}

export interface PushDeletePushServicesUnsubscribe {
	fcm_registration_token?: string;
}

export interface PushPostPushServicesSubscribe {
	fcm_registration_token?: string;
}

export interface RatesCreationRequest {
	/** Amount of the rate, required, must be greater than 0 */
	amount?: number;
	/** Level of the rate, required, must be one of: 'workspace', 'workspace_user', 'project', 'project_user', 'task' */
	level: string;
	/** Identifier of the level, required */
	level_id: number;
	/** Mode of the rate, required if Start is not informed, must be one of: 'override-all', 'override-current', 'start-today' */
	mode?: string;
	/** Start date time of the rate, required if Mode is not informed, must be a valid date time */
	start?: string;
	/** Type of the rate, required, must be one of 'billable_rates', 'labor_rates' */
	type?: string;
}

export interface RelatedUserWithRelated {
	/** will be omitted if empty */
	api_token?: string;
	/** @format date-time */
	at?: string;
	/** AuthorizationUpdatedAt timestamp when the authorization user session object was last updated. */
	authorization_updated_at?: string;
	beginning_of_week?: number;
	/** Clients, null if with_related_data was not set to true or if the user does not have any clients */
	clients?: ModelsClient[];
	country_id?: number;
	/** @format date-time */
	created_at?: string;
	default_workspace_id?: number;
	/** @format email */
	email?: string;
	fullname?: string;
	has_password?: boolean;
	id?: number;
	/** @example "http://example.com" */
	image_url?: string;
	/** will be omitted if empty */
	intercom_hash?: string;
	oauth_providers?: string[];
	/** @format email */
	openid_email?: string;
	openid_enabled?: boolean;
	/** will be omitted if empty */
	options?: ModelsOptions;
	/** Projects, null if with_related_data was not set to true or if the user does not have any projects */
	projects?: ModelsProject[];
	/** Tags, null if with_related_data was not set to true, or if the user does not have any tags */
	tags?: ModelsTag[];
	/** Tasks, null if with_related_data was not set to true or if the user does not have any tasks */
	tasks?: ModelsTask[];
	/** TimeEntries, null if with_related_data was not set to true or if the user does not have any time entries */
	time_entries?: ModelsTimeEntry[];
	timezone?: string;
	/** @format date-time */
	updated_at?: string;
	/** Workspaces, null if with_related_data was not set to true or if the user does not have any workspaces */
	workspaces?: ModelsWorkspace[];
}

export interface RemindersPayload {
	/** Frequency of the reminder in days, should be either 1 or 7 */
	frequency?: number;
	/** Group IDs to send the reminder to, can be omitted if user_ids is provided */
	group_ids?: number[];
	/** Threshold is the number of hours after which the reminder will be sent */
	threshold?: number;
	/** User IDs to send the reminder to, can be omitted if group_ids is provided */
	user_ids?: number[];
}

export interface RemindersPayload {
	/** Frequency of the reminder in days, should be either 1 or 7 */
	frequency?: number;
	/** Group IDs to send the reminder to, can be omitted if user_ids is provided */
	group_ids?: number[];
	/** Threshold is the number of hours after which the reminder will be sent */
	threshold?: number;
	/** User IDs to send the reminder to, can be omitted if group_ids is provided */
	user_ids?: number[];
}

export interface RolesPermission {
	description?: string;
	entity?: string;
	name?: string;
	permission_id?: number;
}

export interface RolesRole {
	code?: string;
	description?: string;
	entity?: string;
	name?: string;
	organization_id?: number;
	permissions?: RolesPermission[];
	role_id?: number;
}

export interface RolesCreateOrganizationRoleParams {
	code?: string;
	description?: string;
	entity?: string;
	name?: string;
}

export interface RolesDuplicateOrganizationRoleParams {
	code?: string;
}

export interface RolesFindRoleParams {
	code?: string;
	organization_id?: number;
}

export interface RolesGetOrganizationRolesForUsersBody {
	user_ids?: number[];
}

export interface RolesUpdateOrganizationRoleParams {
	description?: string;
	entity?: string;
	name?: string;
	permissions?: number[];
}

export interface Saml2LoginResponse {
	sso_url?: string;
}

export interface SavedDetailedReportData {
	report?: DetailedGroupedTimeEntry[];
	totals?: TotalsReportData;
}

export interface SavedListParams {
	fixed_dates?: boolean;
	name?: string;
	page?: number;
	per_page?: number;
	public?: boolean;
	requestingUserID?: number;
	scheduled?: boolean;
	sort_direction?: string;
	sort_field?: string;
}

export interface SavedPayload {
	fixed_daterange?: boolean;
	id?: number;
	name?: string;
	params?: Record<string, any>;
	public?: boolean;
	regenerate_token?: boolean;
}

export interface SavedReportOutput {
	detailed_results?: SavedDetailedReportData;
	dictionaries?: DictionaryReportDictionaries;
	features?: Record<string, boolean>;
	fixed_daterange?: boolean;
	hide_amounts?: boolean;
	input_params?: Record<string, any>;
	public?: boolean;
	report_name?: string;
	/** @example "weekly" */
	report_type?: string;
	saved_params?: Record<string, any>;
	summary_results?: SavedSummaryReportData;
	weekly_results?: SavedWeeklyReportData;
	workspace_logo?: string;
}

export interface SavedSummaryReportData {
	report?: SummaryReportData;
	totals?: TotalsReportData;
}

export interface SavedWeeklyReportData {
	report?: WeeklyDataRow[];
	totals?: TotalsReportData;
}

export interface ScheduledPayload {
	bookmark_id?: number;
	frequency?: number;
	group_ids?: number[];
	user_ids?: number[];
}

export interface SessionCheckWorkspaceUsersPayload {
	/** If true, then it includes the inactive users in the check. */
	include_inactive?: boolean;
	/** List of users to check. */
	users?: number[];
}

export interface SharedBulkDeleteInputData {
	ids?: number[];
}

export interface SmailContactPayload {
	Email?: string;
	Message?: string;
	Name?: string;
}

export interface SmailDemoPayload {
	Email?: string;
	FirstName?: string;
	LastName?: string;
	Phone?: string;
	Purpose?: string;
	Source?: string;
	TeamSize?: string;
}

export interface SmailMeetPayload {
	email?: string;
	location?: string;
}

export interface SsoConfirmation {
	confirmation_code?: string;
}

export interface SubscriptionOutData {
	auto_renew?: boolean;
	billing_period_in_months?: number;
	campaign_available?: boolean;
	cancel_date?: string;
	card_details?: ModelsCardDetails;
	company_id?: number;
	contact_details?: ModelsContactDetail;
	currency?: string;
	current_period_ends_at?: string;
	current_period_starts_at?: string;
	customer_id?: number;
	/** Deprecated: this field will be replaced by CurrentPeriodEndsAt */
	end_date?: string;
	enterprise?: boolean;
	/**
	 * temporary flag which is true iff there is at least one admin in the organization,
	 * who has the `multi_workspace_payments` beta flag enabled
	 */
	is_subscription_beta?: boolean;
	is_unified?: boolean;
	last_invoice?: SubscriptionInvoiceInfo;
	last_payment?: ModelsPaymentInfo;
	last_pricing_plan_id?: number;
	new_signup_trial?: boolean;
	next_payment_date?: string;
	payment_method?: string;
	plan_name?: string;
	/** Legacy fields (kept for compatibility with FE) */
	pricing_plan_id?: number;
	renewal_at?: string;
	renewal_date?: string;
	seat_cost_in_cents?: number;
	seats?: number;
	site?: string;
	/** Deprecated: this field will be replaced by CurrentPeriodStartsAt */
	start_date?: string;
	state?: string;
	subscription_created_at?: string;
	subscription_period?: ModelsPeriod;
	trial_available?: boolean;
	trial_end_date?: string;
	trial_start_date?: string;
}

export interface SubscriptionCreateUnifiedSubsRequest {
	pricing_plan_tag?: string;
}

export interface SubscriptionInvoiceInfo {
	amount?: number;
	created_at?: string;
	currency_id?: number;
	due?: string;
	id?: number;
	paid_at?: string;
	tax_percentage?: number;
	total_amount?: number;
}

export interface SubscriptionPayload {
	data: Record<string, any>;
}

export interface SubscriptionResponsesSubmittedPayload {
	responses_submitted?: ModelsDiscountRequestResponses;
}

export interface SubscriptionUpdateUnifiedSubsRequest {
	pricing_plan_tag?: string;
}

export interface SummaryAudit {
	group_filter?: SummaryAuditGroupFilter;
	/** Whether empty groups should be displayed, default false, premium feature. */
	show_empty_groups?: boolean;
	/** Whether tacked groups should be displayed, default true, premium feature. */
	show_tracked_groups?: boolean;
}

export interface SummaryAuditGroupFilter {
	/** Audit currency, optional, example "USD", premium feature. */
	currency?: string;
	/** Audit max amount in cents, optional, premium feature. */
	max_amount_cents?: number;
	/** Audit max duration in seconds, optional, premium feature. */
	max_duration_seconds?: number;
	/** Audit min amount in cents, optional, premium feature. */
	min_amount_cents?: number;
	/** Audit min duration in seconds, optional, premium feature. */
	min_duration_seconds?: number;
}

export interface SummaryExportPDFPost {
	audit?: SummaryAudit;
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	cents_separator?: string;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Whether collapse others, optional, default false. */
	collapse?: boolean;
	/** Date format, optional, default "MM/DD/YYYY". Can be "MM/DD/YYYY", "DD-MM-YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "DD/MM/YYYY" or "DD.MM.YYYY". */
	date_format?: string;
	/** Description, optional, filtering attribute. */
	description?: string;
	/** DistinguishRates will create new subgroups for each rate, optional, default false. */
	distinguish_rates?: boolean;
	/** Duration format, optional, default "classic". Can be "classic", "decimal" or "improved". */
	duration_format?: 'classic' | 'decimal' | 'improved';
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Grouping option, optional. */
	grouping?: string;
	/** Whether amounts should be hidden, optional, default false. */
	hide_amounts?: boolean;
	/** Whether rates should be hidden, optional, default false. */
	hide_rates?: boolean;
	/** Whether time entry IDs should be included in the results, optional, default false. Not applicable for export. */
	include_time_entry_ids?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Order by option, optional, default title. Can be title or duration. */
	order_by?: string;
	/** Order direction, optional. Can be ASC or DESC. */
	order_dir?: string;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Graph resolution, optional. Allow clients to explicitly request a resolution. */
	resolution?: string;
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** SubGrouping option, optional. */
	sub_grouping?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface SummaryExportPost {
	audit?: SummaryAudit;
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Whether collapse others, optional, default false. */
	collapse?: boolean;
	/** Description, optional, filtering attribute. */
	description?: string;
	/** DistinguishRates will create new subgroups for each rate, optional, default false. */
	distinguish_rates?: boolean;
	/** Duration format, optional, default "classic". Can be "classic", "decimal" or "improved". */
	duration_format?: 'classic' | 'decimal' | 'improved';
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Grouping option, optional. */
	grouping?: string;
	/** Whether amounts should be hidden, optional, default false. */
	hide_amounts?: boolean;
	/** Whether rates should be hidden, optional, default false. */
	hide_rates?: boolean;
	/** Whether time entry IDs should be included in the results, optional, default false. Not applicable for export. */
	include_time_entry_ids?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Order by option, optional, default title. Can be title or duration. */
	order_by?: string;
	/** Order direction, optional. Can be ASC or DESC. */
	order_dir?: string;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** SubGrouping option, optional. */
	sub_grouping?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface SummaryReportData {
	groups?: any[];
}

export interface SummaryReportPost {
	audit?: SummaryAudit;
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** DistinguishRates will create new subgroups for each rate, optional, default false. */
	distinguish_rates?: boolean;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Grouping option, optional. */
	grouping?: string;
	/** Whether time entry IDs should be included in the results, optional, default false. Not applicable for export. */
	include_time_entry_ids?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** SubGrouping option, optional. */
	sub_grouping?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface TagsPayload {
	/** Tag name */
	name?: string;
}

export interface TaskPatchFailure {
	id?: number;
	message?: string;
}

export interface TaskPatchInput {
	op?: string;
	path?: string;
	value?: any;
}

export interface TaskPatchOutput {
	failure?: TaskPatchFailure[];
	success?: number[];
}

export interface TaskPayload {
	/** Use false to mark the task as done */
	active?: boolean;
	/** Task estimation in seconds */
	estimated_seconds?: number;
	/** Name */
	name?: string;
	/** Project ID */
	project_id?: number;
	/** Creator ID, if omitted will use requester user ID */
	user_id?: number;
	/** Workspace ID */
	workspace_id?: number;
}

export interface TaskResponse {
	data?: TaskWithTotal[];
	page?: number;
	per_page?: number;
	sort_field?: string;
	sort_order?: string;
	total_count?: number;
}

export interface TaskWithTotal {
	/** False when the task has been done */
	active?: boolean;
	/** When the task was created/last modified */
	at?: string;
	client_name?: string | null;
	/** Estimation time for this task in seconds */
	estimated_seconds?: number | null;
	/** Task ID */
	id?: number;
	/** Integrations data */
	integration_provider?: string;
	/** Task Name */
	name?: string;
	permissions?: string;
	/** Metadata */
	project_color?: string;
	/** Project ID */
	project_id?: number;
	project_name?: string;
	/** Rate for this task */
	rate?: number;
	/** Last date for rate change */
	rate_last_updated?: string | null;
	/** Whether this is a recurring task */
	recurring?: boolean;
	/** Task assignee, if set above this will be the toggl_account_id for that user */
	toggl_accounts_id?: string | null;
	/** The value tracked_seconds is in milliseconds, not in seconds. */
	tracked_seconds?: number;
	/** Task assignee, if available */
	user_id?: number | null;
	/** Workspace ID */
	workspace_id?: number;
}

export interface TasksTaskStatus {
	billable_amount?: number;
	billable_seconds?: number;
	currency?: string;
	estimated_seconds?: number;
	id?: number;
	tracked_seconds?: number;
}

export interface TasksTasksPost {
	active?: boolean;
	ids?: number[];
	name?: string;
	page_size?: number;
	project_active?: boolean;
	project_ids?: number[];
	start?: number;
	user_ids?: number[];
}

export interface TasksTasksStatusPost {
	/** Time entries IDs. */
	ids?: number[];
}

export interface TimeentriesBulkGetSharingRequest {
	time_entry_id?: number;
	workspace_id?: number;
}

export interface TimeentriesBulkGetSharingResponse {
	is_accepted?: boolean;
	time_entry_id?: number;
	time_entry_invitation_id?: number;
	user_id?: number;
	user_name?: string;
	workspace_id?: number;
}

export interface TimeentriesGetTimEntryInvitationsResponse {
	shared_by_user_id?: number;
	shared_by_user_name?: string;
	time_entry?: ModelsTimeEntry;
	time_entry_invitation_id?: number;
	workspace_id?: number;
}

export type TimeentriesPatchPost = TimeentryPatchInput[];

export interface TimeentryEventMetadata {
	origin_feature?: string;
	visible_goals_count?: number;
}

export interface TimeentryPatchFailure {
	/** The ID for which the patch operation failed. */
	id?: number;
	/** The operation failure reason. */
	message?: string;
}

export interface TimeentryPatchInput {
	/** Operation (add/remove/replace) */
	op?: string;
	/** The path to the entity to patch (e.g. /description) */
	path?: string;
	/** The new value for the entity in path. */
	value?: object;
}

export interface TimeentryPatchOutput {
	failure?: TimeentryPatchFailure[];
	/** The IDs for which the patch was succesful. */
	success?: number[];
}

export interface TimeentryPayload {
	/** Whether the time entry is marked as billable, optional, default false */
	billable?: boolean;
	/** Must be provided when creating a time entry and should identify the service/application used to create it */
	created_with?: string;
	/** Time entry description, optional */
	description?: string;
	/** Time entry duration. For running entries should be negative, preferable -1 */
	duration?: number;
	/** Deprecated: Used to create a time entry with a duration but without a stop time. This parameter can be ignored. */
	duronly?: boolean;
	event_metadata?: TimeentryEventMetadata;
	/** Project ID, legacy field */
	pid?: number;
	/** Project ID, optional */
	project_id?: number;
	/** List of user IDs to share this time entry with */
	shared_with_user_ids?: number[];
	/** Start time in UTC, required for creation. Format: 2006-01-02T15:04:05Z */
	start?: string;
	/** If provided during creation, the date part will take precedence over the date part of "start". Format: 2006-11-07 */
	start_date?: string;
	/**
	 * Stop time in UTC, can be omitted if it's still running or created with "duration".
	 * If "stop" and "duration" are provided, values must be consistent (start + duration == stop)
	 */
	stop?: string;
	/** Can be "add" or "delete". Used when updating an existing time entry */
	tag_action?: string;
	/** IDs of tags to add/remove */
	tag_ids?: number[];
	/** Names of tags to add/remove. If name does not exist as tag, one will be created automatically */
	tags?: string[];
	/** Task ID, optional */
	task_id?: number;
	/** Task ID, legacy field */
	tid?: number;
	/** Time Entry creator ID, legacy field */
	uid?: number;
	/** Time Entry creator ID, if omitted will use the requester user ID */
	user_id?: number;
	/** Workspace ID, legacy field */
	wid?: number;
	/** Workspace ID, required */
	workspace_id?: number;
}

export interface TimesheetsAPITimesheet {
	approved_or_rejected_at?: string;
	approved_or_rejected_id?: number;
	approved_or_rejected_name?: string;
	approver_id?: number;
	approver_name?: string;
	approvers?: TimesheetsApprovers[];
	end_date?: string;
	errors?: TimesheetsTimesheetError[];
	member_id?: number;
	member_name?: string;
	period_editable?: boolean;
	period_end?: string;
	period_locked?: boolean;
	period_start?: string;
	periodicity?: string;
	permissions?: string;
	rejection_comment?: string;
	reminder_day?: string;
	reminder_sent_at?: string;
	reminder_time?: string;
	start_date?: string;
	status?: string;
	submitted_at?: string;
	timesheet_setup_id?: number;
	working_hours_in_minutes?: number;
	workspace_id?: number;
}

export interface TimesheetsApprovers {
	name?: string;
	user_id?: number;
}

export interface TimesheetsGetPaginatedResponse {
	data?: TimesheetsAPITimesheet[];
	page?: number;
	per_page?: number;
	total_count?: number;
}

export interface TimesheetsPutBatchTimesheetPayload {
	rejection_comment?: string;
	start_date?: string;
	status?: string;
	timesheet_setup_id?: number;
}

export interface TimesheetsTimesheetError {
	code?: string;
	message?: string;
}

export interface TimesheetsTimesheetHoursResponse {
	start_date?: string;
	timesheet_setup_id?: number;
	total_seconds?: number;
	working_hours_in_minutes?: number;
}

export interface TimesheetsPostTimesheetHoursPayload {
	start_date?: string;
	timesheet_setup_id?: number;
}

export interface TimesheetsPutTimesheetPayload {
	rejection_comment?: string;
	status?: string;
}

export interface TimesheetsetupsAPITimesheetSetup {
	approver_id?: number;
	approver_name?: string;
	approvers?: TimesheetsetupsApprovers[];
	end_date?: string;
	errors?: ModelsTimesheetSetupError[];
	id?: number;
	member_id?: number;
	member_name?: string;
	periodicity?: string;
	permissions?: string;
	reminder_day?: string;
	reminder_time?: string;
	start_date?: string;
	workspace_id?: number;
}

export interface TimesheetsetupsApprovers {
	name?: string;
	user_id?: number;
}

export interface TimesheetsetupsGetPaginatedResponse {
	data?: TimesheetsetupsAPITimesheetSetup[];
}

export interface TimesheetsetupsCreatePayload {
	approver_id?: number;
	approver_ids?: number[];
	member_ids?: number[];
	periodicity?: string;
	reminder_day?: string;
	reminder_time?: string;
	start_date?: string;
}

export interface TimesheetsetupsUpdatePayload {
	approver_id?: number;
	approver_ids?: number[];
	end_date?: string;
	reminder_day?: string;
	reminder_time?: string;
}

export interface TotalsGraph {
	billable_amount_in_cents?: number;
	by_rate?: Record<string, number>;
	labour_cost_in_cents?: number;
	seconds?: number;
}

export interface TotalsReportData {
	billable_amount_in_cents?: number;
	graph?: TotalsGraph[];
	labour_cost_in_cents?: number;
	rates?: BaseBillableHourlyRate[];
	resolution?: string;
	seconds?: number;
	tracked_days?: number;
}

export interface TotalsReportPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** Totals granularity, optional, overrides resolution values. Possible values: day, week and month. */
	granularity?: string;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Whether time entries should be grouped, optional, default false. */
	grouped?: boolean;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Graph resolution, optional. Allow clients to explicitly request a resolution. */
	resolution?: string;
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** Time entry IDs, optional. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
	/** Whether results should be returned in line, optional, default false. */
	withInlineRates?: boolean;
	/** Whether Graph information should be loaded, optional,  default false. */
	with_graph?: boolean;
}

export interface TypesRole {
	code?: string;
	description?: string;
	entity?: string;
	name?: string;
	organization_id?: number;
	permissions?: string[];
	role_id?: number;
}

export interface TypesUserRole {
	is_active?: boolean;
	organization_id?: number;
	project_id?: number;
	role_id?: number;
	user_id?: number;
	workspace_id?: number;
}

export interface UserAssignmentsPayload {
	group_id?: number;
	joined?: boolean;
	operation?: string;
	user_id?: number;
}

export interface UserFailure {
	/** Organization user ID */
	id?: number;
	/** Found error message */
	message?: string;
}

export type UserFlags = Record<string, any>;

export interface UserOutput {
	/** List of found errors */
	failure?: UserFailure[];
	/** List of org user IDs that were successfully patched */
	success?: number[];
}

export interface UserPatchParams {
	/** Organization user IDs to be deleted */
	delete?: number[];
}

export interface UserPayload {
	admin?: boolean;
	inactive?: boolean;
	/** Custom labor cost for project user */
	labor_cost?: number;
	labor_cost_change_mode?: string;
	/** Paid feature -> DEPRECATED */
	labour_cost?: number;
	/** for explicit NULL-s, add field name here */
	postedFields?: string[];
	/** Paid feature */
	rate?: number;
	/** Paid feature */
	rate_change_mode?: string;
	/** Allowed inputs: "admin", "user", "projectlead" and "teamlead" */
	role?: string;
	role_id?: number;
	/** Paid feature */
	working_hours_in_minutes?: number;
}

export interface UserPostPayload {
	/** Labour cost for this project user */
	labor_cost?: number;
	/** Labor cost change mode for this project user. Can be "start-today", "override-current", "override-all" */
	labor_cost_change_mode?: string;
	/** Old labour cost for this project user -> DEPRECATED */
	labour_cost?: number;
	/** Whether the user will be manager of the project */
	manager?: boolean;
	/** Project ID */
	project_id?: number;
	/** Rate for this project user */
	rate?: number;
	/** Rate change mode for this project user. Can be "start-today", "override-current", "override-all" */
	rate_change_mode?: string;
	/** Whether the last labour cost should be applied or not, default false */
	use_last_labour_cost?: boolean;
	/** User ID */
	user_id?: number;
}

export interface UserPutPayload {
	/** Labour cost for this project user */
	labor_cost?: number;
	/** Labor cost change mode for this project user. Can be "start-today", "override-current", "override-all" */
	labor_cost_change_mode?: string;
	/** Old labour cost for this project user -> DEPRECATED */
	labour_cost?: number;
	/** Whether the user will be manager of the project */
	manager?: boolean;
	/** Rate for this project user */
	rate?: number;
	/** Rate change mode for this project user. Can be "start-today", "override-current", "override-all" */
	rate_change_mode?: string;
}

export interface UsersProjectUsersSummaryRow {
	billable_seconds?: number;
	project_id?: number;
	tracked_seconds?: number;
	user_id?: number;
}

export interface UsersDataTrendsGraph {
	data?: UsersDataTrendsGraphData[];
	resolution?: string;
}

export interface UsersDataTrendsGraphData {
	date?: string;
	users?: UsersDataTrendsUser[];
}

export interface UsersDataTrendsReport {
	currency?: string;
	graph?: UsersDataTrendsGraph;
}

export interface UsersDataTrendsUser {
	billable_seconds?: number;
	earnings?: number;
	name?: string;
	total_seconds?: number;
	user_id?: number;
}

export interface UsersEntityRole {
	group_id?: number;
	is_active?: boolean;
	metadata?: UsersMetaData;
	organization_id?: number;
	project_id?: number;
	role_id?: number;
	user_id?: number;
	workspace_id?: number;
}

export interface UsersGetOrganizationUsersForRolesBody {
	role_ids?: number[];
}

export interface UsersMetaData {
	/**
	 * Data key value prop should match the respective OLAP model that you can find
	 * in internal/authorization/etlworker/auth_keeper/repository.go
	 * Ignoring updated at timestamps so that we don't mess with the OLAP process.
	 */
	data?: Record<string, any>;
	entity?: string;
}

export type UtilsInt64Slice = number[];

export interface UtilsKeyboardShortcut {
	key?: number;
	modifiers?: number;
}

export interface UtilsMacOSAutoTracking {
	id?: string;
	keyword?: string;
	project_id?: number;
	task_id?: number;
}

export type UtilsMacOSAutoTrackingRules = UtilsMacOSAutoTracking[];

export interface UtilsWindowsAutoTracking {
	billable?: boolean;
	description?: string;
	enabled?: boolean;
	id?: string;
	parameters?: UtilsWindowsAutoTrackingParameter;
	project_id?: number;
	skip_when_timer_is_running?: boolean;
	start_without_confirmation?: boolean;
	tag_ids?: UtilsInt64Slice;
	task_id?: number;
	type?: number;
}

export interface UtilsWindowsAutoTrackingParameter {
	duration?: string;
	keyword?: string;
	keyword_mode?: string;
	time_of_day?: string;
	week_days?: string;
}

export type UtilsWindowsAutoTrackingRules = UtilsWindowsAutoTracking[];

export interface WebAggregationsGenerationRequest {
	/** Aggregation type. */
	aggregation?: string;
	/** Size of the batch for loop based generation processes */
	batch_size?: number;
	/** Current entity, to generate data from a point forward */
	current_entity?: string;
	/** Current entity id, to generate data from a point forward */
	current_entity_id?: number;
	/** List of entities to scan */
	entities?: string[];
	/** ProjectIDs fetch time-entries that belong to any of these projects. */
	project_ids?: number[];
	/** Drops existing aggregation data */
	reset?: boolean;
	/** WorkspaceIDs fetch time-entries that belong to any of these workspaces. */
	workspace_ids?: number[];
}

export interface WeeklyDataRow {
	billable_amounts_in_cents?: UtilsInt64Slice;
	billable_seconds?: UtilsInt64Slice;
	client_name?: string;
	currency?: string;
	/** In cents */
	hourly_rate_in_cents?: number;
	planned_task_id?: number;
	project_color?: string;
	project_hex_color?: string;
	project_id?: number;
	project_name?: string;
	seconds?: UtilsInt64Slice;
	user_id?: number;
	user_name?: string;
}

export interface WeeklyExportPDFPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Calculate option, optional. Can be by time or amounts. */
	calculate?: string;
	cents_separator?: string;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Date format, optional, default "MM/DD/YYYY". Can be "MM/DD/YYYY", "DD-MM-YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "DD/MM/YYYY" or "DD.MM.YYYY". */
	date_format?: string;
	/** Description, optional, filtering attribute. */
	description?: string;
	/** Duration format, optional, default "classic". Can be "classic", "decimal" or "improved". */
	duration_format?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** GroupByTask tells the weekly report to return the data grouped by all the usual groups plus planned task. */
	group_by_task?: boolean;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Grouping option, optional. */
	grouping?: string;
	logo_url?: string;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface WeeklyExportPost {
	/** Whether the time entry is set as billable, optional, premium feature. */
	billable?: boolean;
	/** Calculate option, optional. Can be by time or amounts. */
	calculate?: string;
	/** Client IDs, optional, filtering attribute. To filter records with no clients, use [null]. */
	client_ids?: number[];
	/** Description, optional, filtering attribute. */
	description?: string;
	/** End date, example time.DateOnly. Should be greater than Start date. */
	end_date?: string;
	/** GroupByTask tells the weekly report to return the data grouped by all the usual groups plus planned task. */
	group_by_task?: boolean;
	/** Group IDs, optional, filtering attribute. */
	group_ids?: number[];
	/** Grouping option, optional. */
	grouping?: string;
	/** Max duration seconds, optional, filtering attribute. Time Audit only, should be greater than MinDurationSeconds. */
	max_duration_seconds?: number;
	/** Min duration seconds, optional, filtering attribute. Time Audit only, should be less than MaxDurationSeconds. */
	min_duration_seconds?: number;
	/** Project IDs, optional, filtering attribute. To filter records with no projects, use [null]. */
	project_ids?: number[];
	/** Whether time should be rounded, optional, default from user preferences. */
	rounding?: number;
	/** Rounding minutes value, optional, default from user preferences. Should be 0, 1, 5, 6, 10, 12, 15, 30, 60 or 240. */
	rounding_minutes?: number;
	startTime?: string;
	/** Start date, example time.DateOnly. Should be less than End date. */
	start_date?: string;
	/** Tag IDs, optional, filtering attribute. To filter records with no tags, use [null]. */
	tag_ids?: number[];
	/** Task IDs, optional, filtering attribute. To filter records with no tasks, use [null]. */
	task_ids?: number[];
	/** TimeEntryIDs filters by time entries. This was added to support retro-compatibility with reports v2. */
	time_entry_ids?: number[];
	/** User IDs, optional, filtering attribute. */
	user_ids?: number[];
}

export interface WorkspacePayload {
	/** List of admins, optional */
	admins?: number[];
	/** Default currency, premium feature, optional, only for existing WS, will be 'USD' initially */
	default_currency?: string;
	/** The default hourly rate, premium feature, optional, only for existing WS, will be 0.0 initially */
	default_hourly_rate?: number;
	/** The subscription plan for the workspace, deprecated */
	initial_pricing_plan?: number;
	/** Workspace name */
	name?: string;
	/** Only admins will be able to create projects, optional, only for existing WS, will be false initially */
	only_admins_may_create_projects?: boolean;
	/** Only admins will be able to create tags, optional, only for existing WS, will be false initially */
	only_admins_may_create_tags?: boolean;
	/** Whether only admins will be able to see billable rates, premium feature, optional, only for existing WS. Will be false initially */
	only_admins_see_billable_rates?: boolean;
	/** Only admins will be able to see the team dashboard, optional, only for existing WS, will be false initially */
	only_admins_see_team_dashboard?: boolean;
	/** Whether projects will be set as billable by default, premium feature, optional, only for existing WS. Will be true initially */
	projects_billable_by_default?: boolean;
	/** Whether tracking time to projects will enforce billable setting to be respected. */
	projects_enforce_billable?: boolean;
	/** Whether projects will be set to private by default, optional. Will be true initially. */
	projects_private_by_default?: boolean;
	/** The rate change mode, premium feature, optional, only for existing WS. Can be "start-today", "override-current", "override-all" */
	rate_change_mode?: string;
	/** Whether reports should be collapsed by default, optional, only for existing WS, will be true initially */
	reports_collapse?: boolean;
	/** Default rounding, premium feature, optional, only for existing WS */
	rounding?: number;
	/** Default rounding in minutes, premium feature, optional, only for existing WS */
	rounding_minutes?: number;
}

export interface WorkspaceWithActiveProjectCount {
	active_project_count?: number;
	/** Current user is workspace admin */
	admin?: boolean;
	/** deprecated */
	api_token?: string;
	/** Timestamp of last workspace change */
	at?: string;
	/** Workspace on Premium subscription */
	business_ws?: boolean;
	/** CSV upload data */
	csv_upload?: ModelsCsvUpload;
	/** Default currency, premium feature, optional, only for existing WS, will be 'USD' initially */
	default_currency?: string;
	/** The default hourly rate, premium feature, optional, only for existing WS, will be 0.0 initially */
	default_hourly_rate?: number;
	hide_start_end_times?: boolean;
	/** Calendar integration enabled */
	ical_enabled?: boolean;
	/** URL of calendar */
	ical_url?: string;
	/** Identifier of the workspace */
	id?: number;
	/** Last modification of data in the workspace */
	last_modified?: string;
	/** URL of workspace logo */
	logo_url?: string;
	/** How far back free workspaces can access data. */
	max_data_retention_days?: number;
	/** Name of the workspace */
	name?: string;
	/** Only admins will be able to create projects, optional, only for existing WS, will be false initially */
	only_admins_may_create_projects?: boolean;
	/** Only admins will be able to create tags, optional, only for existing WS, will be false initially */
	only_admins_may_create_tags?: boolean;
	/** Whether only admins will be able to see billable rates, premium feature, optional, only for existing WS. Will be false initially */
	only_admins_see_billable_rates?: boolean;
	/** Only admins will be able to see the team dashboard, optional, only for existing WS, will be false initially */
	only_admins_see_team_dashboard?: boolean;
	/** Identifier of the organization */
	organization_id?: number;
	/** Permissions list */
	permissions?: string;
	/** Workspace on Starter subscription */
	premium?: boolean;
	/** deprecated */
	profile?: number;
	/** New projects billable by default */
	projects_billable_by_default?: boolean;
	/** Whether tracking time to projects will enforce billable setting to be respected. */
	projects_enforce_billable?: boolean;
	/** Workspace setting for default project visbility. */
	projects_private_by_default?: boolean;
	/** Timestamp of last workspace rate update */
	rate_last_updated?: string;
	/** Whether reports should be collapsed by default, optional, only for existing WS, will be true initially */
	reports_collapse?: boolean;
	/** Role of the current user in the workspace */
	role?: string;
	/** Default rounding, premium feature, optional, only for existing WS. 0 - nearest, 1 - round up, -1 - round down */
	rounding?: number;
	/** Default rounding in minutes, premium feature, optional, only for existing WS */
	rounding_minutes?: number;
	/** deprecated */
	subscription?: ModelsSubscription;
	/**
	 * Timestamp of suspension
	 * @format date-time
	 */
	suspended_at?: string;
	/** Time entry constraints setting */
	te_constraints?: ModelsTimeEntryConstraints;
	/** Working hours in minutes */
	working_hours_in_minutes?: number;
}

export interface WorkspaceUsersPatchParams {
	/** Workspace user IDs to be deleted */
	delete?: number[];
}

export interface WorkspacesJSONResult {
	wid?: number;
}

export namespace AuditLogs {
	/**
	 * @description Returns a list of audit log events for the specified organization and time range.
	 * @tags audit_logs
	 * @name GetAuditLogs
	 * @summary Fetch audit logs.
	 * @request GET:/audit_logs/{organization_id}/{from}/{to}
	 * @secure
	 */
	export namespace GetAuditLogs {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Start datetime in RFC3339 format */
			from: string;
			/** End datetime in RFC3339 format */
			to: string;
		};
		export type RequestQuery = {
			/** If set to true, returns all audit logs without pagination */
			export?: boolean;
			/** Workspace ID */
			workspace_id?: number;
			/** Entity Type */
			entity_type?: string;
			/** Entity ID */
			entity_id?: number;
			/** Action */
			action?: string;
			/** User ID */
			user_id?: number;
			/** Page Size */
			page_size?: number;
			/** Page Number */
			page_number?: number;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = object[];
	}
}

export namespace Auth {
	/**
	 * @description Returns the SSO URL given an email address for authenticating in an Identity Provider.
	 * @tags authentication
	 * @name GetSaml2LoginUrl
	 * @summary SAML2 Identity Provider URL
	 * @request GET:/auth/saml2/login
	 */
	export namespace GetSaml2LoginUrl {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User email */
			email: string;
			/** Client identification (webapp/toggl-button/client) TODO: add desktop identification */
			client?: string;
			/** State to be preserved when redirecting to Accounts API */
			state?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Saml2LoginResponse;
	}

	/**
	 * @description Receives the IdP Callback containing the SAML2 assertion with response of user authentication in the IdP.
	 * @tags authentication
	 * @name PostSaml2Callback
	 * @summary SAML2 Identity Provider Callback
	 * @request POST:/auth/saml2/login/{workspace_id}
	 */
	export namespace PostSaml2Callback {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** SAML2 assertion with authentication response */
			SAMLResponse: string;
			/** Encoded string containing client and host which originated the requests */
			RelayState?: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = any;
	}
}

export namespace Avatars {
	/**
	 * @description Handles POST avatar requests.
	 * @tags avatars
	 * @name PostAvatars
	 * @summary Avatars
	 * @request POST:/avatars
	 * @secure
	 */
	export namespace PostAvatars {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** file form data */
			file: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAvatar;
	}

	/**
	 * @description Handles DELETE avatar requests.
	 * @tags avatars
	 * @name DeleteAvatars
	 * @summary Avatars
	 * @request DELETE:/avatars
	 * @secure
	 */
	export namespace DeleteAvatars {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Change user avatar to gravatar.
	 * @tags avatars
	 * @name PostUseGravatar
	 * @summary UseGravatar
	 * @request POST:/avatars/use_gravatar
	 * @secure
	 */
	export namespace PostUseGravatar {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAvatar;
	}
}

export namespace Countries {
	/**
	 * @description Returns a list of existing countries
	 * @tags countries
	 * @name GetCountries
	 * @summary Countries
	 * @request GET:/countries
	 */
	export namespace GetCountries {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsCountry[];
	}

	/**
	 * @description Returns a list of subdivisions for a specific country.
	 * @tags countries
	 * @name GetCountriesCountryIdSubdivisions
	 * @summary CountrySubdivisions
	 * @request GET:/countries/{country_id}/subdivisions
	 */
	export namespace GetCountriesCountryIdSubdivisions {
		export type RequestParams = {
			/** country id */
			countryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSubdivision[];
	}
}

export namespace Currencies {
	/**
	 * @description Returns a list of available currencies.
	 * @tags subscription
	 * @name GetCurrencies
	 * @summary Currencies
	 * @request GET:/currencies
	 */
	export namespace GetCurrencies {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsCurrency[];
	}
}

export namespace DesktopLogin {
	/**
	 * @description Store new desktop login token
	 * @tags auth
	 * @name DesktopLoginList
	 * @summary Get desktop login token
	 * @request GET:/desktop_login
	 */
	export namespace DesktopLoginList {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = any;
	}
}

export namespace DesktopLoginTokens {
	/**
	 * @description Store new desktop login token
	 * @tags auth
	 * @name DesktopLoginTokensCreate
	 * @summary Post desktop login token
	 * @request POST:/desktop_login_tokens
	 */
	export namespace DesktopLoginTokensCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = DesktopLoginToken;
	}
}

export namespace Feedback {
	/**
	 * @description Send Feedback
	 * @tags feedback
	 * @name PostUnifiedFeedback
	 * @summary Feedback
	 * @request POST:/feedback
	 * @secure
	 */
	export namespace PostUnifiedFeedback {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Toggl version. */
			toggl_version: string;
			/** Feedback date. */
			date: string;
			/** Feedback details. */
			details: string;
			/** Update channel. */
			update_channel?: string;
			/** Email subject. */
			subject?: string;
			/** Device Model. */
			device_model?: string;
			/** Build Number. */
			build_number?: string;
			/** Operating system. */
			operating_system?: string;
			/** Latest feedback. */
			latest?: boolean;
			/**
			 * One or more files.
			 * @format binary
			 */
			files?: Blob;
		};
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Send Feedback web.
	 * @tags feedback
	 * @name PostFeedbackWeb
	 * @summary FeedbackWeb
	 * @request POST:/feedback/web
	 * @secure
	 */
	export namespace PostFeedbackWeb {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Toggl version. */
			toggl_version: string;
			/** Feedback date. */
			date: string;
			/** Feedback details. */
			details: string;
			/** Update channel. */
			update_channel?: string;
			/** Email subject. */
			subject?: string;
			/** Latest feedback. */
			latest?: boolean;
			/**
			 * One or more files.
			 * @format binary
			 */
			files?: Blob;
		};
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}
}

export namespace Ical {
	/**
	 * @description Returns ical file with TEs from last 14 days
	 * @tags ical
	 * @name GetIcal
	 * @summary Ical file
	 * @request GET:/ical/workspace_user/{token}
	 */
	export namespace GetIcal {
		export type RequestParams = {
			token: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}
}

export namespace Insights {
	/**
	 * @description Returns the projects' data trends projects from a workspace.
	 * @tags insights
	 * @name ApiV1WorkspaceDataTrendsProjectsCreate
	 * @summary Load projects' data trends
	 * @request POST:/insights/api/v1/workspace/{workspace_id}/data_trends/projects
	 * @secure
	 */
	export namespace ApiV1WorkspaceDataTrendsProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectsProjectTrend;
		export type RequestHeaders = {};
		export type ResponseBody = ProjectsProjectTrends[];
	}

	/**
	 * @description Downloads employee profitability insights in the specified format: csv or xlsx.
	 * @tags insights, exports
	 * @name ApiV1WorkspaceProfitabilityEmployeesCreate
	 * @summary Export employee profitability insights
	 * @request POST:/insights/api/v1/workspace/{workspace_id}/profitability/employees.{extension}
	 * @secure
	 */
	export namespace ApiV1WorkspaceProfitabilityEmployeesCreate {
		export type RequestParams = {
			workspaceId: string;
			extension: string;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoEmployeeProfitability;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads profitability project insights in the specified format: csv or xlsx.
	 * @tags insights, exports
	 * @name ApiV1WorkspaceProfitabilityProjectsCreate
	 * @summary Export profitability project insights
	 * @request POST:/insights/api/v1/workspace/{workspace_id}/profitability/projects.{extension}
	 * @secure
	 */
	export namespace ApiV1WorkspaceProfitabilityProjectsCreate {
		export type RequestParams = {
			/** csv,xlsx */
			extension: string;
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectProfitability;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads projects data trends in the specified format: csv or xlsx.
	 * @tags insights, exports
	 * @name ApiV1WorkspaceTrendsProjectsCreate
	 * @summary Export projects data trends
	 * @request POST:/insights/api/v1/workspace/{workspace_id}/trends/projects.{extension}
	 * @secure
	 */
	export namespace ApiV1WorkspaceTrendsProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** csv,xlsx */
			extension: string;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectsProjectTrend;
		export type RequestHeaders = {};
		export type ResponseBody = ProjectsProjectTrends[];
	}
}

export namespace Integrations {
	/**
	 * @description Get all integrations a user has. Each user may have at most one integration per provider.
	 * @tags calendar
	 * @name CalendarList
	 * @summary Get all integrations a user has.
	 * @request GET:/integrations/calendar
	 * @secure
	 */
	export namespace CalendarList {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsIntegration[];
	}

	/**
	 * @description Get all selected calendars for a given user that was previously saved in the database.
	 * @tags calendar
	 * @name CalendarCalendarsSelectedList
	 * @summary Get all selected calendars for a given user.
	 * @request GET:/integrations/calendar/calendars/selected
	 * @secure
	 */
	export namespace CalendarCalendarsSelectedList {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Max results per page */
			limit?: string;
			/** Token for next page. Used in pagination when the number of results exceed 'limit' */
			page_token?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarCalendarsResponse;
	}

	/**
	 * @description Callback endpoint used only by the Calendar Service Provider, which fetches the code
	 * @tags calendar
	 * @name CalendarCallbackDetail
	 * @summary Callback for provider OAuth setup.
	 * @request GET:/integrations/calendar/callback/{provider}
	 * @secure
	 */
	export namespace CalendarCallbackDetail {
		export type RequestParams = {
			provider: string;
		};
		export type RequestQuery = {
			/** Calendar service provider */
			provider: string;
			/** state string to verify user authenticity */
			state: string;
			/** Temporary code which will be used to fetch credentials */
			code: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = any;
	}

	/**
	 * @description Get all events from selected calendars for the caller user. This endpoint will only return events if events were fetched from provider before the request is made. Check which is the endpoint for the events.
	 * @tags calendar
	 * @name CalendarEventsList
	 * @summary Get all events for the caller user.
	 * @request GET:/integrations/calendar/events
	 * @secure
	 */
	export namespace CalendarEventsList {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Smallest boundary date to search for calendar events */
			start_date: string;
			/** Biggest boundary date to search for calendar events */
			end_date: string;
			/** Max results per page */
			limit?: string;
			/** Token for next page. Used in pagination when the number of results exceed 'limit' */
			page_token?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarEventsResponse;
	}

	/**
	 * @description Given one or more event IDs, this endpoint responds with the most probable event details (and its accuracy) to assign to the to-be-created time entry for each event ID. This endpoint will only suggests time entries with description and project not empty, because it uses the description to tell if the TE is similar and the project as the main detail to be suggested. If the description is equal, as well as all the other details, the accuracy will be 100%, in the case the description is equal but the other details differs, the most frequent will be suggested and the accuracy will be given based on the frequency. In the case there is no TE with the same description the most similar will be suggested based on the Jaro-Winkler algorithm, and the accuracy will be the similarity rating. This endpoint returns status 200 OK with only the successful suggestions. Any event ID that is invalid or the user does not have access to will be ignored, as well as any event that has no available suggestion.
	 * @tags calendar
	 * @name CalendarEventsDetailsSuggestionCreate
	 * @summary Get details suggestion for given events.
	 * @request POST:/integrations/calendar/events/details-suggestion
	 * @secure
	 */
	export namespace CalendarEventsDetailsSuggestionCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = HandlercalendarPostDetailsSuggestionRequest;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarPostDetailsSuggestionResponse;
	}

	/**
	 * @description Fetch all events from a user's selected calendars and save in database.
	 * @tags calendar
	 * @name CalendarEventsUpdateCreate
	 * @summary Update all events from selected calendars for a user.
	 * @request POST:/integrations/calendar/events/update
	 * @secure
	 */
	export namespace CalendarEventsUpdateCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarResponse;
	}

	/**
	 * @description Given an event ID, this endpoint responds with the most probable event details (and the accuracy) to assign to the to-be-created time entry. This endpoint will only suggests time entries with description and project not empty, because it uses the description to tell if the TE is similar and the project as the main detail to be suggested. If the description is equal, as well as all the other details, the accuracy will be 100%, in the case the description is equal but the other details differs, the most frequent will be suggested and the accuracy will be given based on the frequency. In the case there is no TE with the same description the most similar will be suggested based on the Jaro-Winkler algorithm, and the accuracy will be the similarity rating. This endpoint returns status 200 OK and a "null" string in case no suggestion was found.
	 * @tags calendar
	 * @name CalendarEventsDetailsSuggestionDetail
	 * @summary Get details suggestion for a given event.
	 * @request GET:/integrations/calendar/events/{event_id}/details-suggestion
	 * @secure
	 */
	export namespace CalendarEventsDetailsSuggestionDetail {
		export type RequestParams = {
			/** Calendar event ID which we want to get a possible project to match */
			eventId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSuggestion;
	}

	/**
	 * @description Set up an integration with a given provider, returning a URL to the said provider in order to
	 * @tags calendar
	 * @name CalendarSetupList
	 * @summary Get URL for setting up a calendar integration with given provider.
	 * @request GET:/integrations/calendar/setup
	 * @secure
	 */
	export namespace CalendarSetupList {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Calendar service provider which the calendars will be retrieved */
			provider: string;
			/** Page to which the user will be redirected after authenticating */
			return_to?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = any;
	}

	/**
	 * @description Updates an integration properties.
	 * @tags calendar
	 * @name CalendarUpdate
	 * @summary Update a given integration.
	 * @request PUT:/integrations/calendar/{integration_id}
	 * @secure
	 */
	export namespace CalendarUpdate {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Executes logic deletion of an integration.
	 * @tags calendar
	 * @name CalendarDelete
	 * @summary Delete a given integration.
	 * @request DELETE:/integrations/calendar/{integration_id}
	 * @secure
	 */
	export namespace CalendarDelete {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get all calendars for a given integration that was previously saved in the database.
	 * @tags calendar
	 * @name CalendarCalendarsDetail
	 * @summary Get all calendars for a given integration.
	 * @request GET:/integrations/calendar/{integration_id}/calendars
	 * @secure
	 */
	export namespace CalendarCalendarsDetail {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
		};
		export type RequestQuery = {
			/** Max results per page */
			limit?: number;
			/** if we should get the selected or not calendars, or all calendars, in case of omission */
			selected?: boolean;
			/** Token for next page. Used in pagination when the number of results exceed 'limit' */
			page_token?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarCalendarsResponse;
	}

	/**
	 * @description This endpoint uses the passed integration to get a provider and update all the calendars from that
	 * @tags calendar
	 * @name CalendarCalendarsUpdateCreate
	 * @summary Updates calendar data according to provider API.
	 * @request POST:/integrations/calendar/{integration_id}/calendars/update
	 * @secure
	 */
	export namespace CalendarCalendarsUpdateCreate {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarFetchedCalendarsResponse;
	}

	/**
	 * @description This endpoint is used to set updatable fields of a calendar like selected field.
	 * @tags calendar
	 * @name CalendarCalendarsPartialUpdate
	 * @summary Sets whether a calendar is or not selected by the user.
	 * @request PATCH:/integrations/calendar/{integration_id}/calendars/{calendar_id}
	 * @secure
	 */
	export namespace CalendarCalendarsPartialUpdate {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
			/** Calendar ID as saved in the database */
			calendarId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = HandlercalendarPatchCalendar;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsCalendar[];
	}

	/**
	 * @description Get all events for a given calendar in a given integration.
	 * @tags calendar
	 * @name CalendarCalendarsEventsDetail
	 * @summary (DEPRECATED) Get all events for a given calendar in a given integration.
	 * @request GET:/integrations/calendar/{integration_id}/calendars/{id_calendar}/events
	 * @secure
	 */
	export namespace CalendarCalendarsEventsDetail {
		export type RequestParams = {
			/** Integration ID as saved in the database */
			integrationId: number;
			/** Calendar ID as returned by the provider, it may be an e-mail address, for instance */
			idCalendar: string;
		};
		export type RequestQuery = {
			/** Smallest boundary date to search for calendar events */
			start_date: string;
			/** Biggest boundary date to search for calendar events */
			end_date: string;
			/** Max results per page */
			limit?: string;
			/** Token for next page. Used in pagination when the number of results exceed 'limit' */
			page_token?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlercalendarEventsResponse;
	}
}

export namespace Invitations {
	/**
	 * @description Returns an invitation data by code.
	 * @tags invitations
	 * @name GetInvitations
	 * @summary Get an invitation
	 * @request GET:/invitations/{invitation_code}
	 */
	export namespace GetInvitations {
		export type RequestParams = {
			/** Invitation code */
			invitationCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSSOInvitation;
	}
}

export namespace Keys {
	/**
	 * @description Returns the current JWKS keyset used to sign JWT tokens.
	 * @tags keys
	 * @name GetKeys
	 * @summary get keys
	 * @request GET:/keys
	 */
	export namespace GetKeys {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = JwkSet;
	}
}

export namespace Me {
	/**
	 * @description Returns details for the current user.
	 * @tags me
	 * @name GetMe
	 * @summary Me
	 * @request GET:/me
	 * @secure
	 */
	export namespace GetMe {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Retrieve user related data (clients, projects, tasks, tags, workspaces, time entries, etc.) */
			with_related_data?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = RelatedUserWithRelated;
	}

	/**
	 * @description Updates details for the current user.
	 * @tags me
	 * @name PutMe
	 * @summary Me
	 * @request PUT:/me
	 * @secure
	 */
	export namespace PutMe {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = MePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTogglUser;
	}

	/**
	 * @description Accepts the last version of the Terms of Service for the current user.
	 * @tags me
	 * @name PostMeAcceptTos
	 * @summary AcceptTOS
	 * @request POST:/me/accept_tos
	 * @secure
	 */
	export namespace PostMeAcceptTos {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get Clients.
	 * @tags me
	 * @name GetClients
	 * @summary Clients
	 * @request GET:/me/clients
	 * @secure
	 */
	export namespace GetClients {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Retrieve clients created/modified/deleted since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient[];
	}

	/**
	 * @description Close Account
	 * @tags me
	 * @name PostCloseAccount
	 * @summary CloseAccount
	 * @request POST:/me/close_account
	 * @secure
	 */
	export namespace PostCloseAccount {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Disable product emails.
	 * @tags me
	 * @name PostMeDisableProductEmails
	 * @summary Disable product emails
	 * @request POST:/me/disable_product_emails/{disable_code}
	 */
	export namespace PostMeDisableProductEmails {
		export type RequestParams = {
			/** Disable Code */
			disableCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Disable weekly report.
	 * @tags me
	 * @name PostMeDisableWeeklyReport
	 * @summary Disable weekly report
	 * @request POST:/me/disable_weekly_report/{weekly_report_code}
	 */
	export namespace PostMeDisableWeeklyReport {
		export type RequestParams = {
			/** Weekly report code */
			weeklyReportCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Confirm SSO enabling in existing Toggl account after successful SSO
	 * @tags authentication
	 * @name PostEnableSso
	 * @summary Confirm SSO enabling for user account
	 * @request POST:/me/enable_sso
	 * @secure
	 */
	export namespace PostEnableSso {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = SsoConfirmation;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List of objects to be downloaded for an user
	 * @tags exports
	 * @name GetMeExport
	 * @summary Get a list of objects to be downloaded
	 * @request GET:/me/export
	 * @secure
	 */
	export namespace GetMeExport {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsDownloadRequestRecord[];
	}

	/**
	 * @description An object which data to be downloaded for an user
	 * @tags exports
	 * @name PostMeExport
	 * @summary Post an object which data to be downloaded
	 * @request POST:/me/export
	 * @secure
	 */
	export namespace PostMeExport {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ExportPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get a zip file List of download requests from an user.
	 * @tags exports
	 * @name GetMeExportDataUuidZip
	 * @summary Get the zip file with download requests
	 * @request GET:/me/export/data/{uuid}.zip
	 * @secure
	 */
	export namespace GetMeExportDataUuidZip {
		export type RequestParams = {
			uuid: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Gets all favorites for the requesting user
	 * @tags favorites
	 * @name GetFavorites
	 * @summary Get a list of favorites
	 * @request GET:/me/favorites
	 * @secure
	 */
	export namespace GetFavorites {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Retrieve favorites created/deleted since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsFavorite[];
	}

	/**
	 * @description This endpoint allows updating an array of favorites. It follow all the requirements and behavior from the [post] (Create Favorite) counterpart.
	 * @tags favorites
	 * @name UpdateFavorite
	 * @summary Update an array of favorites
	 * @request PUT:/me/favorites
	 * @secure
	 */
	export namespace UpdateFavorite {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
		};
		export type RequestBody = HandlerfavoritesPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsFavorite;
	}

	/**
	 * @description This endpoint allows the creation of a favorite given some parameters. The workspace is required, as well as either description or project (no favorite without both will be accepted). The user is also required, but it already goes in the authentication. Also, the user must have access to all resources being referenced in the favorite attributes, and these resources should have valid relationships. For instance, if you want a favorite in a given workspace and with some tags, the tags must belong to that workspace. In case of user having no access to an attribute, a 403 status is returned, if the attributes don't relate correctly between themselves the status returned will be 400.
	 * @tags favorites
	 * @name CreateFavorite
	 * @summary Create a favorite
	 * @request POST:/me/favorites
	 * @secure
	 */
	export namespace CreateFavorite {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
		};
		export type RequestBody = HandlerfavoritesPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsFavorite;
	}

	/**
	 * @description It will create 3 favorites based on past user's TE activity and return them. Suggested favorites will be created only once for a given user, and only if the user has never created a favorite before (either manually or by a previous suggestion request). If there is no past TE data there won't be suggested favorites either.
	 * @tags favorites
	 * @name PostFavoritesSuggestions
	 * @summary Generates and returns a list of suggested favorites.
	 * @request POST:/me/favorites/suggestions
	 * @secure
	 */
	export namespace PostFavoritesSuggestions {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsFavorite[];
	}

	/**
	 * @description Deletes a given favorite logically from database, as well as its tags.
	 * @tags favorites
	 * @name DeleteFavorite
	 * @summary Deletes a given favorite
	 * @request DELETE:/me/favorites/{favorite_id}
	 * @secure
	 */
	export namespace DeleteFavorite {
		export type RequestParams = {
			favoriteId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Get features.
	 * @tags me
	 * @name GetMeFeatures
	 * @summary Features
	 * @request GET:/me/features
	 * @secure
	 */
	export namespace GetMeFeatures {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = MeWorkspace[];
	}

	/**
	 * @description Returns flags for the current user. They will be represented by an object with dynamic string keys, where the value can be of any type.
	 * @tags me
	 * @name GetMeFlags
	 * @summary Flags
	 * @request GET:/me/flags
	 * @secure
	 */
	export namespace GetMeFlags {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserFlags;
	}

	/**
	 * @description Add flags for the current user. The current limits are 4 flags per request, 128 flags in total. Keys and values can be up to 32 and 64 characters, respectively.
	 * @tags me
	 * @name PostMeFlags
	 * @summary Flags
	 * @request POST:/me/flags
	 * @secure
	 */
	export namespace PostMeFlags {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = UserFlags;
		export type RequestHeaders = {};
		export type ResponseBody = UserFlags;
	}

	/**
	 * @description Returns the client's IP-based location. If no data is present, empty response will be yielded.
	 * @tags me
	 * @name GetMeLocation
	 * @summary User's last known location
	 * @request GET:/me/location
	 */
	export namespace GetMeLocation {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = MeUserLocationResponse;
	}

	/**
	 * @description Used to check if authentication works.
	 * @tags me
	 * @name LoggedList
	 * @summary Logged
	 * @request GET:/me/logged
	 */
	export namespace LoggedList {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Get notifications.
	 * @tags me
	 * @name GetMeNotifications
	 * @summary Notifications
	 * @request GET:/me/notifications
	 * @secure
	 */
	export namespace GetMeNotifications {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsUserNotification[];
	}

	/**
	 * @description Mark notification seen.
	 * @tags me
	 * @name PutNotifications
	 * @summary Notifications
	 * @request POST:/me/notifications/{notification_id}/seen
	 * @secure
	 */
	export namespace PutNotifications {
		export type RequestParams = {
			/** Notification ID. */
			notificationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get all organizations a given user is part of.
	 * @tags me
	 * @name GetOrganizations
	 * @summary Organizations that a user is part of
	 * @request GET:/me/organizations
	 */
	export namespace GetOrganizations {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsMeOrganization[];
	}

	/**
	 * @description Returns user preferences and alpha features. The list of alpha features contains a full list of feature codes (every feature that exists in database) and the `enabled` flag specifying if that feature should be enabled or disabled for the user.
	 * @tags preferences
	 * @name GetPreferences
	 * @summary Preferences for the current user
	 * @request GET:/me/preferences
	 * @secure
	 */
	export namespace GetPreferences {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAllPreferences;
	}

	/**
	 * @description With this endpoint, preferences can be modified and alpha features can be enabled or disabled.
	 * @tags preferences
	 * @name PostPreferences
	 * @summary Update the preferences for the current user
	 * @request POST:/me/preferences
	 * @secure
	 */
	export namespace PostPreferences {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ModelsAllPreferences;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns user preferences and alpha features. The list of alpha features contains a full list of feature codes (every feature that exists in database) and the `enabled` flag specifying if that feature should be enabled or disabled for the user.
	 * @tags preferences
	 * @name GetPreferencesClient
	 * @summary Preferences for an specific client of the current user
	 * @request GET:/me/preferences/{client}
	 * @secure
	 */
	export namespace GetPreferencesClient {
		export type RequestParams = {
			/** Client type */
			client?: 'desktop' | 'web';
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Retrieve preference modified since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAllPreferences;
	}

	/**
	 * @description With this endpoint, preferences can be modified and alpha features can be enabled or disabled.
	 * @tags preferences
	 * @name PostPreferencesClient
	 * @summary Update the preferences for an specific client of the current user
	 * @request POST:/me/preferences/{client}
	 * @secure
	 */
	export namespace PostPreferencesClient {
		export type RequestParams = {
			/** Client type */
			client?: 'desktop' | 'web';
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsAllPreferences;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get projects
	 * @tags me
	 * @name GetMeProjects
	 * @summary Projects
	 * @request GET:/me/projects
	 * @secure
	 */
	export namespace GetMeProjects {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Include archived projects. */
			include_archived?: string;
			/** Retrieve projects modified since this date using UNIX timestamp, including deleted ones. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject[];
	}

	/**
	 * @description Get paginated projects.
	 * @tags me
	 * @name GetMeProjectsPaginated
	 * @summary ProjectsPaginated
	 * @request GET:/me/projects/paginated
	 * @secure
	 */
	export namespace GetMeProjectsPaginated {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Project ID to resume the next pagination from. */
			start_project_id?: number;
			/** Retrieve projects created/modified/deleted since this date using UNIX timestamp. */
			since?: number;
			/** Number of items per page, default 201. */
			per_page?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject[];
	}

	/**
	 * @description Get list of firebase tokens registered for current user.
	 * @tags me
	 * @name GetPushServices
	 * @summary PushServices
	 * @request GET:/me/push_services
	 * @secure
	 */
	export namespace GetPushServices {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string[];
	}

	/**
	 * @description Register Firebase token for current user
	 * @tags me
	 * @name PostPushServices
	 * @summary PushServices
	 * @request POST:/me/push_services
	 * @secure
	 */
	export namespace PostPushServices {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = PushPostPushServicesSubscribe;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Unregister Firebase token for current user
	 * @tags me
	 * @name DeletePushServices
	 * @summary PushServices
	 * @request DELETE:/me/push_services
	 * @secure
	 */
	export namespace DeletePushServices {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = PushDeletePushServicesUnsubscribe;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Resets API token for the current user.
	 * @tags authentication
	 * @name PostResetToken
	 * @summary ResetToken
	 * @request POST:/me/reset_token
	 * @secure
	 */
	export namespace PostResetToken {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns tags for the current user.
	 * @tags me
	 * @name GetTags
	 * @summary Tags
	 * @request GET:/me/tags
	 * @secure
	 */
	export namespace GetTags {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Retrieve tags modified/deleted since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTag[];
	}

	/**
	 * @description Returns tasks from projects in which the user is participating.
	 * @tags me
	 * @name GetTasks
	 * @summary Tasks
	 * @request GET:/me/tasks
	 * @secure
	 */
	export namespace GetTasks {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
		};
		export type RequestBody = {
			/** Retrieve tasks created/modified/deleted since this date using UNIX timestamp. */
			since?: number;
			/** Include tasks marked as done. */
			include_not_active?: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask[];
	}

	/**
	 * @description Lists latest time entries.
	 * @tags time_entries
	 * @name GetTimeEntries
	 * @summary TimeEntries
	 * @request GET:/me/time_entries
	 * @secure
	 */
	export namespace GetTimeEntries {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
			/** Include sharing details in the response */
			include_sharing?: boolean;
		};
		export type RequestBody = {
			/** Get entries modified since this date using UNIX timestamp, including deleted ones. */
			since?: number;
			/** Get entries with start time, before given date (YYYY-MM-DD) or with time in RFC3339 format. */
			before?: string;
			/** Get entries with start time, from start_date YYYY-MM-DD or with time in RFC3339 format. To be used with end_date. */
			start_date?: string;
			/** Get entries with start time, until end_date YYYY-MM-DD or with time in RFC3339 format. To be used with start_date. */
			end_date?: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry[];
	}

	/**
	 * @description Load running time entry for user ID.
	 * @tags time_entries
	 * @name GetCurrentTimeEntry
	 * @summary Get current time entry
	 * @request GET:/me/time_entries/current
	 * @secure
	 */
	export namespace GetCurrentTimeEntry {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}

	/**
	 * @description Load time entry by ID that is accessible by the current user.
	 * @tags time_entries
	 * @name GetTimeEntryNotesBulk
	 * @summary Get a time entries' notes by ID.
	 * @request POST:/me/time_entries/notes
	 * @secure
	 */
	export namespace GetTimeEntryNotesBulk {
		export type RequestParams = {
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntryNotes[];
	}

	/**
	 * @description Load time entry by ID that is accessible by the current user.
	 * @tags time_entries
	 * @name GetTimeEntryById
	 * @summary Get a time entry by ID.
	 * @request GET:/me/time_entries/{time_entry_id}
	 * @secure
	 */
	export namespace GetTimeEntryById {
		export type RequestParams = {
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
			/** Include sharing details in the response */
			include_sharing?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}

	/**
	 * @description Load time entry by ID that is accessible by the current user.
	 * @tags time_entries
	 * @name GetTimeEntryNotesById
	 * @summary Get a time entries' notes by ID.
	 * @request GET:/me/time_entries/{time_entry_id}/notes
	 * @secure
	 */
	export namespace GetTimeEntryNotesById {
		export type RequestParams = {
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntryNotes;
	}

	/**
	 * @description Load time entry notes by ID that is accessible by the current user.
	 * @tags time_entries
	 * @name PutTimeEntryNotes
	 * @summary Put a time entry notes by ID.
	 * @request PUT:/me/time_entries/{time_entry_id}/notes
	 * @secure
	 */
	export namespace PutTimeEntryNotes {
		export type RequestParams = {
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntryNotes;
	}

	/**
	 * @description Delete time entry notes by ID that is accessible by the current user.
	 * @tags time_entries_notes
	 * @name DeleteTimeEntryNotes
	 * @summary delete a time entry note by ID.
	 * @request DELETE:/me/time_entries/{time_entry_id}/notes
	 * @secure
	 */
	export namespace DeleteTimeEntryNotes {
		export type RequestParams = {
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get the sharing details of the specified time entries in bulk
	 * @tags time_entries
	 * @name PostMeTimeEntriesSharedWith
	 * @summary TimeEntries
	 * @request POST:/me/time_entries_shared_with
	 * @secure
	 */
	export namespace PostMeTimeEntriesSharedWith {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = TimeentriesBulkGetSharingRequest[];
		export type RequestHeaders = {};
		export type ResponseBody = TimeentriesBulkGetSharingResponse[];
	}

	/**
	 * @description Returns the timehseets for the current user.
	 * @tags me
	 * @name GetMeTimesheets
	 * @summary User's Timesheets
	 * @request GET:/me/timesheets
	 * @secure
	 */
	export namespace GetMeTimesheets {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimesheet[];
	}

	/**
	 * @description Returns a list of track reminders.
	 * @tags me
	 * @name GetMeTrackReminders
	 * @summary TrackReminders
	 * @request GET:/me/track_reminders
	 * @secure
	 */
	export namespace GetMeTrackReminders {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTrackReminder[];
	}

	/**
	 * @description Get web timer.
	 * @tags me
	 * @name GetWebTimer
	 * @summary WebTimer
	 * @request GET:/me/web-timer
	 * @secure
	 */
	export namespace GetWebTimer {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Lists workspaces for given user.
	 * @tags workspaces, me
	 * @name GetWorkspaces
	 * @summary Workspaces
	 * @request GET:/me/workspaces
	 * @secure
	 */
	export namespace GetWorkspaces {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Retrieve workspaces created/modified/deleted since this date using UNIX timestamp, including the dates a workspace member got added, removed or updated in the workspace. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = WorkspaceWithActiveProjectCount[];
	}
}

export namespace Mobile {
	/**
	 * @description Send Mobile Feedback.
	 * @tags mobile
	 * @name PostMobileFeedback
	 * @summary MobileFeedback
	 * @request POST:/mobile/feedback
	 * @secure
	 */
	export namespace PostMobileFeedback {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ModelsMobileFeedback;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
}

export namespace Organizations {
	/**
	 * @description Creates a new organization with a single workspace and assigns current user as the organization owner
	 * @tags organizations
	 * @name PostOrganization
	 * @summary Creates a new organization
	 * @request POST:/organizations
	 * @secure
	 */
	export namespace PostOrganization {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ModelsPostPayload;
		export type RequestHeaders = {};
		export type ResponseBody = OrganizationPostOrganizationReply;
	}

	/**
	 * @description User connected with invitation is marked as joined, email is sent to the inviter.
	 * @tags organizations, invitations
	 * @name PostOrganizationAcceptInvitation
	 * @summary Accepts invitation
	 * @request POST:/organizations/invitations/{invitation_code}/accept
	 */
	export namespace PostOrganizationAcceptInvitation {
		export type RequestParams = {
			/** Invitation code */
			inviutationCode: string;
			invitationCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description User connected with invitation is marked as deleted.
	 * @tags invitations
	 * @name PostRejectInvitation
	 * @summary Rejects invitation
	 * @request POST:/organizations/invitations/{invitation_code}/reject
	 */
	export namespace PostRejectInvitation {
		export type RequestParams = {
			/** Invitation code */
			inviutationCode: string;
			invitationCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns organization name and current pricing plan
	 * @tags organizations
	 * @name GetOrganization
	 * @summary Organization data
	 * @request GET:/organizations/{organization_id}
	 * @secure
	 */
	export namespace GetOrganization {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsMeOrganization;
	}

	/**
	 * @description Updates an existing organization
	 * @tags organizations
	 * @name PutOrganization
	 * @summary Updates an existing organization
	 * @request PUT:/organizations/{organization_id}
	 * @secure
	 */
	export namespace PutOrganization {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsPutPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns list of groups in organization based on set of url parameters. List is sorted by name.
	 * @tags groups, organizations
	 * @name GetOrganizationGroups
	 * @summary List of groups in organization with user and workspace assignments
	 * @request GET:/organizations/{organization_id}/groups
	 * @secure
	 */
	export namespace GetOrganizationGroups {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {
			/** Returns records where name contains this string */
			name?: string;
			/** ID of workspace. Returns groups assigned to this workspace */
			workspace?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = GroupOrganizationGroupResponse[];
	}

	/**
	 * @description Creates a group in the specified organization
	 * @tags groups, organizations
	 * @name PostOrganizationGroup
	 * @summary Create group
	 * @request POST:/organizations/{organization_id}/groups
	 * @secure
	 */
	export namespace PostOrganizationGroup {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupPayload;
		export type RequestHeaders = {};
		export type ResponseBody = GroupOrganizationGroupResponse;
	}

	/**
	 * @description Edits a group in the specified organization
	 * @tags organizations, groups
	 * @name PutOrganizationGroup
	 * @summary Edit group
	 * @request PUT:/organizations/{organization_id}/groups/{group_id}
	 * @secure
	 */
	export namespace PutOrganizationGroup {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			groupId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupPayload;
		export type RequestHeaders = {};
		export type ResponseBody = GroupOrganizationGroupResponse;
	}

	/**
	 * @description Deletes a group from the specified organization
	 * @tags groups, organizations,
	 * @name DeleteOrganizationGroup
	 * @summary Deletes group
	 * @request DELETE:/organizations/{organization_id}/groups/{group_id}
	 * @secure
	 */
	export namespace DeleteOrganizationGroup {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID of the group. */
			groupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Patches a group in the specified organization. Patches are applied individually.
	 * @tags organizations, groups
	 * @name PatchOrganizationGroup
	 * @summary Patch group
	 * @request PATCH:/organizations/{organization_id}/groups/{group_id}
	 * @secure
	 */
	export namespace PatchOrganizationGroup {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID of the group. */
			groupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupsPatchInput[];
		export type RequestHeaders = {};
		export type ResponseBody = GroupsPatchOutput;
	}

	/**
	 * @description Creates a new invitation for the user.
	 * @tags invitations, organizations
	 * @name PostOrganizationInvitation
	 * @summary Creates a new invitation for the user
	 * @request POST:/organizations/{organization_id}/invitations
	 * @secure
	 */
	export namespace PostOrganizationInvitation {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = InvitationPost;
		export type RequestHeaders = {};
		export type ResponseBody = InvitationResult;
	}

	/**
	 * @description Resend invitation email to user.
	 * @tags invitations
	 * @name PutInvitation
	 * @summary Resends user their invitation
	 * @request PUT:/organizations/{organization_id}/invitations/{invitation_code}/resend
	 */
	export namespace PutInvitation {
		export type RequestParams = {
			/** Organization ID */
			organizationId: number;
			/** Invitation code */
			invitationCode: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns a Invoice document in PDF form.
	 * @tags subscription
	 * @name GetOrganizationInvoice
	 * @summary InvoicePdf
	 * @request GET:/organizations/{organization_id}/invoices/{invoice_uid}.pdf
	 * @secure
	 */
	export namespace GetOrganizationInvoice {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID or string ID of the invoice. */
			invoiceUid: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns organization owner data.
	 * @tags organizations
	 * @name GetOrganizationOwner
	 * @summary Get owner of the organization
	 * @request GET:/organizations/{organization_id}/owner
	 * @secure
	 */
	export namespace GetOrganizationOwner {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsOrganizationOwner;
	}

	/**
	 * No description
	 * @tags organizations owner
	 * @name GetOwnershipTransfers
	 * @summary Returns list of organization transfers made in the organization
	 * @request GET:/organizations/{organization_id}/owner/transfer
	 */
	export namespace GetOwnershipTransfers {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {
			/** If true, returns only current, not finished transfer */
			ongoing?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTransfer[];
	}

	/**
	 * @description Return the ownership transfer for a given organization.
	 * @tags organizations owner
	 * @name PostOwnershipTransfer
	 * @summary Creates new ownership transfer process
	 * @request POST:/organizations/{organization_id}/owner/transfer
	 */
	export namespace PostOwnershipTransfer {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTransfer;
	}

	/**
	 * No description
	 * @tags organizations owner
	 * @name GetOwnershipTransfer
	 * @summary Returns single organization transfer in the organization
	 * @request GET:/organizations/{organization_id}/owner/transfer/{transfer_id}
	 */
	export namespace GetOwnershipTransfer {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID of the transfer. */
			transferId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTransfer;
	}

	/**
	 * @description Return the ownership transfer for a given organization and emails stakeholders.
	 * @tags organizations owner
	 * @name PostOwnershipTransferActions
	 * @summary Updates transfer process and emails stakeholders
	 * @request POST:/organizations/{organization_id}/owner/transfer/{transfer_id}/{action}
	 */
	export namespace PostOwnershipTransferActions {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID of the transfer. */
			transferId: number;
			/** Action to update transfer with. */
			action: 'accept' | 'decline' | 'withdraw';
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTransfer;
	}

	/**
	 * @description Returns paid invoices
	 * @tags organizations
	 * @name GetOrganizationsPaymentsRecords
	 * @summary OrganizationsPaymentRecords
	 * @request GET:/organizations/{organization_id}/payment_records
	 * @secure
	 */
	export namespace GetOrganizationsPaymentsRecords {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {
			/** If 'true', returns unified invoices */
			is_unified?: true | false;
			/** Next cursor for unified subsriptions. Cannot be used without `last_inv` */
			cursor?: string;
			/** Last invoice ID from the previous call. */
			last_inv?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsUnifiedSubscriptionInvoiceList[];
	}

	/**
	 * @description Returns pricing plans for an organization
	 * @tags organizations
	 * @name GetOrganizationsPlans
	 * @summary OrganizationsPlans
	 * @request GET:/organizations/{organization_id}/plans
	 * @secure
	 */
	export namespace GetOrganizationsPlans {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BillingPricingStruct;
	}

	/**
	 * @description Returns pricing plan for an organization identified by plan_id
	 * @tags organizations
	 * @name GetOrganizationsPlans2
	 * @summary OrganizationsPlan
	 * @request GET:/organizations/{organization_id}/plans/{plan_id}
	 * @originalName getOrganizationsPlans
	 * @duplicate
	 * @secure
	 */
	export namespace GetOrganizationsPlans2 {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Numeric ID of the plan */
			planId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BillingPricingStruct;
	}

	/**
	 * @description Returns a list of organization specific and global roles.
	 * @tags organizations
	 * @name GetOrganizationRoles
	 * @summary Organization roles.
	 * @request GET:/organizations/{organization_id}/roles
	 * @secure
	 */
	export namespace GetOrganizationRoles {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TypesRole[];
	}

	/**
	 * @description Returns organization segmentation information
	 * @tags organizations
	 * @name GetOrganizationSegmentation
	 * @summary Organization segmentation data
	 * @request GET:/organizations/{organization_id}/segmentation
	 * @secure
	 */
	export namespace GetOrganizationSegmentation {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsOrganizationSegmentation;
	}

	/**
	 * @description Save organization segmentation information
	 * @tags organizations
	 * @name PutOrganizationSegmentation
	 * @summary Organization segmentation data
	 * @request PUT:/organizations/{organization_id}/segmentation
	 * @secure
	 */
	export namespace PutOrganizationSegmentation {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsOrganizationSegmentation;
	}

	/**
	 * @description Returns subscription data.
	 * @tags subscription
	 * @name GetOrganizationSubscription
	 * @summary Subscription
	 * @request GET:/organizations/{organization_id}/subscription
	 * @secure
	 */
	export namespace GetOrganizationSubscription {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SubscriptionOutData;
	}

	/**
	 * @description Allows to update existing unified subscription for an organization.
	 * @tags subscription
	 * @name PutOrganizationSubscription
	 * @summary Subscription
	 * @request PUT:/organizations/{organization_id}/subscription
	 * @secure
	 */
	export namespace PutOrganizationSubscription {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SubscriptionUpdateUnifiedSubsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Allows to create a new unified subscription for an organization.
	 * @tags subscription
	 * @name PostOrganizationSubscription
	 * @summary Subscription
	 * @request POST:/organizations/{organization_id}/subscription
	 * @secure
	 */
	export namespace PostOrganizationSubscription {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SubscriptionCreateUnifiedSubsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Cancels an existing subscription.
	 * @tags subscription
	 * @name DeleteOrganizationSubscription
	 * @summary Subscription
	 * @request DELETE:/organizations/{organization_id}/subscription
	 * @secure
	 */
	export namespace DeleteOrganizationSubscription {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {
			/** If true, the subscription is canceled immediately otherwise canceled at period end */
			immediateCancel: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Allows to create a cancellation feedback for an organization subscription.
	 * @tags subscription
	 * @name PostOrganizationSubscriptionCancellationFeedback
	 * @summary Subscription cancellation feedback
	 * @request POST:/organizations/{organization_id}/subscription/cancellation_feedback
	 * @secure
	 */
	export namespace PostOrganizationSubscriptionCancellationFeedback {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SubscriptionPayload;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Retrieve unified customer belonging to the organization.
	 * @tags organizations/customer
	 * @name GetUnifiedCustomer
	 * @summary Retrieve unified customer
	 * @request GET:/organizations/{organization_id}/subscription/customer
	 * @secure
	 */
	export namespace GetUnifiedCustomer {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = CustomerUnifiedCustomerResponse;
	}

	/**
	 * @description Allows to update unified customer data. Customer name, email, country & postal code are mandatory fields. Optional fields will be cleared if they don't have a value.
	 * @tags organizations/customer
	 * @name PutUnifiedCustomer
	 * @summary Update unified customer
	 * @request PUT:/organizations/{organization_id}/subscription/customer
	 * @secure
	 */
	export namespace PutUnifiedCustomer {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = CustomerUnifiedCustomerResponse;
	}

	/**
	 * @description Creates unified customer for organization.
	 * @tags organizations/customer
	 * @name PostUnifiedCustomer
	 * @summary Create unified customer
	 * @request POST:/organizations/{organization_id}/subscription/customer
	 * @secure
	 */
	export namespace PostUnifiedCustomer {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = CustomerUnifiedCustomerResponse;
	}

	/**
	 * @description Endpoint for client's feedback when canceling plan. It triggers an e-mail to support with feedbacks and discount request.
	 * @tags subscription
	 * @name PostOrganizationSubscriptionDiscountRequest
	 * @summary Discount request
	 * @request POST:/organizations/{organization_id}/subscription/discount_request
	 * @secure
	 */
	export namespace PostOrganizationSubscriptionDiscountRequest {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SubscriptionResponsesSubmittedPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns a summary of the next invoice for an Organization
	 * @tags subscription
	 * @name GetOrganizationInvoiceSummary
	 * @summary Invoice Summary
	 * @request GET:/organizations/{organization_id}/subscription/invoice_summary
	 * @secure
	 */
	export namespace GetOrganizationInvoiceSummary {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {
			/** Quantity of the subscription */
			quantity?: number;
			/** Pricing plan tag */
			pricing_plan_tag?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Applies the given promotion code to organization's customer If the customer already has the promotion code, then it will be overridden
	 * @tags organizations/subscription/promocode
	 * @name PostPromotionCode
	 * @summary Applies the given promotion code to organization's customer
	 * @request POST:/organizations/{organization_id}/subscription/promocode
	 * @secure
	 */
	export namespace PostPromotionCode {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Removes any discount (promotion code) applied to the organization's customer
	 * @tags organizations/subscription/promocode
	 * @name DeletePromotionCode
	 * @summary Removes any discount (promotion code) applied to the organization's customer
	 * @request DELETE:/organizations/{organization_id}/subscription/promocode
	 * @secure
	 */
	export namespace DeletePromotionCode {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Returns a Purchase Order document in PDF form.
	 * @tags organizations subscription
	 * @name GetOrganizationPurchaseOrderPdf
	 * @summary PurchaseOrderPdf
	 * @request GET:/organizations/{organization_id}/subscription/purchase_orders/{purchase_order_uid}.pdf
	 * @secure
	 */
	export namespace GetOrganizationPurchaseOrderPdf {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
			/** Numeric ID or string ID of the purchase order. */
			purchaseOrderUid: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * No description
	 * @name PostReferralBonus
	 * @summary Applies the Referral Bonus if the customer is elligible
	 * @request POST:/organizations/{organization_id}/subscription/referral_bonus
	 * @secure
	 */
	export namespace PostReferralBonus {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {
			/** The GrowSurf campaign to use instead of the default ones */
			campaign_id?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Create a setup intent for collecting customer's payment method for future payments
	 * @tags organizations/subscription/setup_intent
	 * @name CreateSetupIntent
	 * @summary Create a setup intent for collecting customer's payment method
	 * @request POST:/organizations/{organization_id}/subscription/setup_intent
	 * @secure
	 */
	export namespace CreateSetupIntent {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Allows to create a new unified subscription on initial 30-day trial for an organization.
	 * @tags subscription
	 * @name PostOrganizationSubscription2
	 * @summary Subscription
	 * @request POST:/organizations/{organization_id}/subscription/trial
	 * @originalName postOrganizationSubscription
	 * @duplicate
	 * @secure
	 */
	export namespace PostOrganizationSubscription2 {
		export type RequestParams = {
			/** Numeric ID of the organization. */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Returns list of users in organization based on set of url parameters: Result is paginated. Pagination params are returned in headers
	 * @tags organizations, users
	 * @name GetOrganizationUsers
	 * @summary List of users in organization
	 * @request GET:/organizations/{organization_id}/users
	 * @secure
	 */
	export namespace GetOrganizationUsers {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {
			/** Returns records where name or email contains this string */
			filter?: string;
			/** List of `active` `inactive` `invited` comma separated(if not present, all statuses) */
			active_status?: string;
			/** If true returns admins only */
			only_admins?: string;
			/** Comma-separated list of groups ids, returns users belonging to these groups only */
			groups?: string;
			/** Comma-separated list of workspaces ids, returns users belonging to this workspaces only */
			workspaces?: string;
			/** Page number, default 1 */
			page?: number;
			/** Number of items per page, default 50 */
			per_page?: number;
			/** Values 'asc' or 'desc', result is sorted on 'names' column, default 'asc' */
			sort_dir?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsOrgUser[];
	}

	/**
	 * @description Apply changes in bulk to users in an organization (currently deletion only).
	 * @tags organizations, users
	 * @name PatchOrganizationUsers
	 * @summary Apply changes in bulk to users in an organization
	 * @request PATCH:/organizations/{organization_id}/users
	 * @secure
	 */
	export namespace PatchOrganizationUsers {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UserPatchParams;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns list of users in organization based on set of url parameters: Result is paginated. Pagination params are returned in headers
	 * @tags organizations, users
	 * @name GetOrganizationUsersDetailed
	 * @summary List of users in organization with details
	 * @request GET:/organizations/{organization_id}/users/detailed
	 * @secure
	 */
	export namespace GetOrganizationUsersDetailed {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {
			/** Returns records where name or email contains this string */
			filter?: string;
			/** List of `active` `inactive` `invited` comma separated(if not present, all statuses) */
			active_status?: string;
			/** If true returns admins only */
			only_admins?: string;
			/** Comma-separated list of groups ids, returns users belonging to these groups only */
			groups?: string;
			/** Comma-separated list of workspaces ids, returns users belonging to this workspaces only */
			workspaces?: string;
			/** Page number, default 1 */
			page?: number;
			/** Number of items per page, default 50 */
			per_page?: number;
			/** Values 'asc' or 'desc', result is sorted on 'names' column, default 'asc' */
			sort_dir?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsOrgUser[];
	}

	/**
	 * @description Leaves organization, effectively delete user account in org and delete organization if it is last user
	 * @tags users, organizations
	 * @name DeleteOrganizationUsersLeave
	 * @summary Leaves organization
	 * @request DELETE:/organizations/{organization_id}/users/leave
	 * @secure
	 */
	export namespace DeleteOrganizationUsersLeave {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Changes a single organization-user. Can affect the following values:
	 * @tags organizations, users
	 * @name PutOrganizationUsers
	 * @summary Changes a single organization-user
	 * @request PUT:/organizations/{organization_id}/users/{organization_user_id}
	 * @secure
	 */
	export namespace PutOrganizationUsers {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			organizationUserId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = UserPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Create a workspace within an existing organization.
	 * @tags workspaces, organizations
	 * @name PostOrganizationWorkspaces
	 * @summary Create a new workspace.
	 * @request POST:/organizations/{organization_id}/workspaces
	 * @secure
	 */
	export namespace PostOrganizationWorkspaces {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = WorkspacePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsWorkspace;
	}

	/**
	 * @description Returns map indexed by workspace ID where each map element contains workspace admins list, members count and groups count.
	 * @tags organizations, workspaces
	 * @name GetOrganizationWorkspacesStatistics
	 * @summary Statistics for all workspaces in the organization
	 * @request GET:/organizations/{organization_id}/workspaces/statistics
	 * @secure
	 */
	export namespace GetOrganizationWorkspacesStatistics {
		export type RequestParams = {
			organizationId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Record<string, ModelsStatistics>;
	}

	/**
	 * @description Assign or remove users to/from a workspace or to/from groups belonging to said workspace.
	 * @tags organizations, workspaces, users, groups
	 * @name PutOrganizationWorkspacesAssignments
	 * @summary Change assignments of users within a workspace.
	 * @request PUT:/organizations/{organization_id}/workspaces/{workspace_id}/assignments
	 * @secure
	 */
	export namespace PutOrganizationWorkspacesAssignments {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Numeric ID of the workspace within the organization */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UserAssignmentsPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns list of groups in a workspace based on set of url parameters. List is sorted by name.
	 * @tags groups, workspaces, organizations
	 * @name GetOrganizationWorkspacesGroups
	 * @summary List of groups in a workspace within an organization with user assignments.
	 * @request GET:/organizations/{organization_id}/workspaces/{workspace_id}/groups
	 * @secure
	 */
	export namespace GetOrganizationWorkspacesGroups {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Numeric ID of the workspace within the organization */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = GroupOrganizationGroupResponse[];
	}

	/**
	 * @description Returns any users who belong to the workspace directly or through at least one group.
	 * @tags workspaces, users
	 * @name GetOrganizationWorkspacesWorkspaceusers
	 * @summary List of users who belong to the given workspace.
	 * @request GET:/organizations/{organization_id}/workspaces/{workspace_id}/workspace_users
	 * @secure
	 */
	export namespace GetOrganizationWorkspacesWorkspaceusers {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Numeric ID of the workspace within the organization */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Workspace user name to filter by */
			name: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsWorkspaceUser[];
	}

	/**
	 * @description Changes the users in a workspace (currently deletion only).
	 * @tags workspaces, users
	 * @name PatchOrganizationWorkspaceUsers
	 * @summary Changes the users in a workspace.
	 * @request PATCH:/organizations/{organization_id}/workspaces/{workspace_id}/workspace_users
	 * @secure
	 */
	export namespace PatchOrganizationWorkspaceUsers {
		export type RequestParams = {
			/** Numeric ID of the organization */
			organizationId: number;
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = WorkspaceUsersPatchParams;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
}

export namespace Permissions {
	/**
	 * @description Retrieves permissions based on product ID.
	 * @tags permissions
	 * @name PermissionsDetail
	 * @summary Get permissions
	 * @request GET:/permissions/{product_id}
	 */
	export namespace PermissionsDetail {
		export type RequestParams = {
			/** Product ID */
			productId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = RolesPermission[];
	}
}

export namespace Reports {
	/**
	 * @description <p>Returns the previously saved report.</p> <p><b>Authentication</b></p><p>A public report is accessible by anyone, a private one is only accessible by the report's owner or workspace admin. If the criteria aren't met it returns 403 status code.</p> <p><b>Parameters</b></p><p>The report can be executed without parameters, and in this case the saved or default parameters will be used.</p>
	 * @tags saved_reports
	 * @name ApiV3SharedCreate
	 * @summary Load the previously saved report
	 * @request POST:/reports/api/v3/shared/{report_token}
	 * @secure
	 */
	export namespace ApiV3SharedCreate {
		export type RequestParams = {
			/** Token for the saved report */
			reportToken: string;
		};
		export type RequestQuery = {};
		export type RequestBody = string;
		export type RequestHeaders = {};
		export type ResponseBody = SavedReportOutput;
	}

	/**
	 * @description <p>Downloads a previously saved report in csv.</p> <p><b>Authentication</b></p><p>A public report is accessible by anyone, a private one is only accessible by the report's owner or workspace admin. If the criteria aren't met it returns 403 status code.</p> <p><b>Parameters</b></p><p>The report can be executed without parameters, and in this case the saved or default parameters will be used.</p>
	 * @tags saved_reports, exports
	 * @name ApiV3SharedCsvCreate
	 * @summary Export CSV for saved report
	 * @request POST:/reports/api/v3/shared/{report_token}.csv
	 * @secure
	 */
	export namespace ApiV3SharedCsvCreate {
		export type RequestParams = {
			/** Token for the saved report */
			reportToken: string;
		};
		export type RequestQuery = {};
		export type RequestBody = string;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description <p>Downloads a previously saved report in xlsx.</p> <p><b>Authentication</b></p><p>A public report is accessible by anyone, a private one is only accessible by the report's owner or workspace admin. If the criteria aren't met it returns 403 status code.</p> <p><b>Parameters</b></p><p>The report can be executed without parameters, and in this case the saved or default parameters will be used.</p>
	 * @tags saved_reports, exports
	 * @name ApiV3SharedXlsxCreate
	 * @summary Export XSLX saved report
	 * @request POST:/reports/api/v3/shared/{report_token}.xlsx
	 * @secure
	 */
	export namespace ApiV3SharedXlsxCreate {
		export type RequestParams = {
			/** Token for the saved report */
			reportToken: string;
		};
		export type RequestQuery = {};
		export type RequestBody = string;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description <p><b>Authentication</b></p><p>A public report is accessible by anyone, a private one is only accessible by the report's owner or workspace admin. If the criteria aren't met it returns 403 status code.</p> <p><b>Parameters</b></p><p>The report can be executed without parameters, and in this case the saved or default parameters will be used.</p>
	 * @tags saved_reports, exports
	 * @name ApiV3SharedPdfCreate
	 * @summary Export saved report in pdf format
	 * @request POST:/reports/api/v3/shared/{report_token}/pdf
	 * @secure
	 */
	export namespace ApiV3SharedPdfCreate {
		export type RequestParams = {
			/** Token for the saved report */
			reportToken: string;
		};
		export type RequestQuery = {};
		export type RequestBody = string;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns comparative report.
	 * @name ApiV3WorkspaceComparativeCreate
	 * @summary Load comparative report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/comparative
	 * @secure
	 */
	export namespace ApiV3WorkspaceComparativeCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ComparativeComparativePost;
		export type RequestHeaders = {};
		export type ResponseBody = ComparativeReport;
	}

	/**
	 * @description Returns the clients' data trends.
	 * @name ApiV3WorkspaceDataTrendsClientsCreate
	 * @summary Load clients' data trends
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/data_trends/clients
	 * @secure
	 */
	export namespace ApiV3WorkspaceDataTrendsClientsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = BaseDataTrendsPost;
		export type RequestHeaders = {};
		export type ResponseBody = ClientsDataTrendsReport;
	}

	/**
	 * @description Returns projects' data trends.
	 * @name ApiV3WorkspaceDataTrendsProjectsCreate
	 * @summary Load projects' data trends
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/data_trends/projects
	 * @secure
	 */
	export namespace ApiV3WorkspaceDataTrendsProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = BaseDataTrendsPost;
		export type RequestHeaders = {};
		export type ResponseBody = ProjectsDataTrendsReport;
	}

	/**
	 * @description Returns users' data trends.
	 * @name ApiV3WorkspaceDataTrendsUsersCreate
	 * @summary Load users' data trends
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/data_trends/users
	 * @secure
	 */
	export namespace ApiV3WorkspaceDataTrendsUsersCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = BaseDataTrendsPost;
		export type RequestHeaders = {};
		export type ResponseBody = UsersDataTrendsReport;
	}

	/**
	 * @description Returns filtered clients from a workspace (only ID and name).
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersClientsCreate
	 * @summary List clients
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/clients
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersClientsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoClientFilterParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoClientFilterResponse[];
	}

	/**
	 * @description Returns the project groups from a workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersProjectGroupsCreate
	 * @summary List project groups filter
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/project_groups
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersProjectGroupsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectGroupParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoProjectGroupResponse[];
	}

	/**
	 * @description Returns filtered user projects.
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersProjectUsersCreate
	 * @summary List project users
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/project_users
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersProjectUsersCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectUserParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoProjectUserResponse[];
	}

	/**
	 * @description Returns filtered projects from a workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersProjectsCreate
	 * @summary List projects
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/projects
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectFilterParamRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoProjectFilterResponse[];
	}

	/**
	 * @description Returns	filtered projects statuses from a workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersProjectsStatusCreate
	 * @summary List projects statuses
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/projects/status
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersProjectsStatusCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectStatusParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoProjectStatusResponse[];
	}

	/**
	 * @description Filter tasks statuses from a workspace
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersTasksStatusCreate
	 * @summary List tasks statuses
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/tasks/status
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersTasksStatusCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TasksTasksStatusPost;
		export type RequestHeaders = {};
		export type ResponseBody = TasksTaskStatus[];
	}

	/**
	 * @description Returns filtered users from a workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceFiltersUsersCreate
	 * @summary List users
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/filters/users
	 * @secure
	 */
	export namespace ApiV3WorkspaceFiltersUsersCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoUserFilterParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoUserFilterResponse[];
	}

	/**
	 * @description Returns profitability projects report.
	 * @name ApiV3WorkspaceProfitabilityProjectsCreate
	 * @summary Load profitability projects report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/profitability/projects
	 * @secure
	 */
	export namespace ApiV3WorkspaceProfitabilityProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectProfitability;
		export type RequestHeaders = {};
		export type ResponseBody = ProjectsReport;
	}

	/**
	 * @description Returns summary user projects.
	 * @tags summary_reports
	 * @name ApiV3WorkspaceProjectsSummaryCreate
	 * @summary List project users
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/projects/summary
	 * @secure
	 */
	export namespace ApiV3WorkspaceProjectsSummaryCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectUsersRequest;
		export type RequestHeaders = {};
		export type ResponseBody = UsersProjectUsersSummaryRow[];
	}

	/**
	 * @description Returns project's summary.
	 * @tags summary_reports
	 * @name ApiV3WorkspaceProjectsSummaryCreate2
	 * @summary Load project summary
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/projects/{project_id}/summary
	 * @originalName apiV3WorkspaceProjectsSummaryCreate
	 * @duplicate
	 * @secure
	 */
	export namespace ApiV3WorkspaceProjectsSummaryCreate2 {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** Project ID */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = BaseRangePost;
		export type RequestHeaders = {};
		export type ResponseBody = TotalsReportData;
	}

	/**
	 * @description Returns filtered clients from a workspace (whole client object).
	 * @tags utils
	 * @name ApiV3WorkspaceSearchClientsCreate
	 * @summary Search clients
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/clients
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchClientsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoClientFilterParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoClientFilterResponse[];
	}

	/**
	 * @description Returns filtered projects from a workspace (whole project object).
	 * @tags utils
	 * @name ApiV3WorkspaceSearchProjectsCreate
	 * @summary List projects
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/projects
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchProjectsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoProjectFilterParamRequest;
		export type RequestHeaders = {};
		export type ResponseBody = DtoProjectFilterResponse[];
	}

	/**
	 * @description Returns time entries for detailed report according to the given filters. Supports pagination via X-Next-ID and X-Next-Row-Number headers returned in the response. See [Overview](https://developers.track.toggl.com/docs/reports_start#detailed-reports)
	 * @tags detailed_reports
	 * @name ApiV3WorkspaceSearchTimeEntriesCreate
	 * @summary Search time entries
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/time_entries
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchTimeEntriesCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DetailedPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads detailed report in pdf format.
	 * @tags detailed_reports, exports
	 * @name ApiV3WorkspaceSearchTimeEntriesPdfCreate
	 * @summary Export detailed report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/time_entries.pdf
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchTimeEntriesPdfCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DetailedExportPDFPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads detailed report in the specified format: csv or xlsx.
	 * @tags detailed_reports, exports
	 * @name ApiV3WorkspaceSearchTimeEntriesCreate2
	 * @summary Export detailed report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/time_entries.{extension}
	 * @originalName apiV3WorkspaceSearchTimeEntriesCreate
	 * @duplicate
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchTimeEntriesCreate2 {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** csv,xlsx */
			extension: string;
		};
		export type RequestQuery = {};
		export type RequestBody = DetailedSearchExportPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns totals sums for detailed report.
	 * @tags detailed_reports
	 * @name ApiV3WorkspaceSearchTimeEntriesTotalsCreate
	 * @summary Load totals detailed report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/time_entries/totals
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchTimeEntriesTotalsCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TotalsReportPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns filtered users from a workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceSearchUsersCreate
	 * @summary List users
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/search/users
	 * @secure
	 */
	export namespace ApiV3WorkspaceSearchUsersCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = DtoUserFilterParamsRequest;
		export type RequestHeaders = {};
		export type ResponseBody = ModelUser[];
	}

	/**
	 * @description Returns time entries for summary report according to the given filters.
	 * @tags summary_reports
	 * @name ApiV3WorkspaceSummaryTimeEntriesCreate
	 * @summary Search time entries
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/summary/time_entries
	 * @secure
	 */
	export namespace ApiV3WorkspaceSummaryTimeEntriesCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SummaryReportPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads summary report in pdf format.
	 * @tags summary_reports, exports
	 * @name ApiV3WorkspaceSummaryTimeEntriesPdfCreate
	 * @summary Export summary report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/summary/time_entries.pdf
	 * @secure
	 */
	export namespace ApiV3WorkspaceSummaryTimeEntriesPdfCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SummaryExportPDFPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads summary report in the specified in the specified format: csv or xlsx.
	 * @tags summary_reports, exports
	 * @name ApiV3WorkspaceSummaryTimeEntriesCreate2
	 * @summary Export summary report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/summary/time_entries.{extension}
	 * @originalName apiV3WorkspaceSummaryTimeEntriesCreate
	 * @duplicate
	 * @secure
	 */
	export namespace ApiV3WorkspaceSummaryTimeEntriesCreate2 {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** csv,xlsx */
			extension: string;
		};
		export type RequestQuery = {};
		export type RequestBody = SummaryExportPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns time entries for weekly report according to the given filters.
	 * @tags weekly_reports
	 * @name ApiV3WorkspaceWeeklyTimeEntriesCreate
	 * @summary Search time entries
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/weekly/time_entries
	 * @secure
	 */
	export namespace ApiV3WorkspaceWeeklyTimeEntriesCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = BasePost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads weekly report in csv format.
	 * @tags weekly_reports, exports
	 * @name ApiV3WorkspaceWeeklyTimeEntriesCsvCreate
	 * @summary Export weekly report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/weekly/time_entries.csv
	 * @secure
	 */
	export namespace ApiV3WorkspaceWeeklyTimeEntriesCsvCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = WeeklyExportPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Downloads weekly report in pdf format.
	 * @tags weekly_reports, exports
	 * @name ApiV3WorkspaceWeeklyTimeEntriesPdfCreate
	 * @summary Export weekly report
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/weekly/time_entries.pdf
	 * @secure
	 */
	export namespace ApiV3WorkspaceWeeklyTimeEntriesPdfCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = WeeklyExportPDFPost;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns filtered tasks from workspace.
	 * @tags utils
	 * @name ApiV3WorkspaceTasksCreate
	 * @summary List tasks
	 * @request POST:/reports/api/v3/workspace/{workspace_id}/{action}/tasks
	 * @secure
	 */
	export namespace ApiV3WorkspaceTasksCreate {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** search,filters */
			action: string;
		};
		export type RequestQuery = {};
		export type RequestBody = TasksTasksPost;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask[];
	}
}

export namespace Roles {
	/**
	 * @description Retrieves roles based on product ID.
	 * @tags roles
	 * @name RolesDetail
	 * @summary Get roles
	 * @request GET:/roles/{product_id}
	 */
	export namespace RolesDetail {
		export type RequestParams = {
			/** Product ID */
			productId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole[];
	}

	/**
	 * @description Finds a role within a product by code, optional organization ID.
	 * @tags roles
	 * @name FindCreate
	 * @summary Find role
	 * @request POST:/roles/{product_id}/find
	 */
	export namespace FindCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RolesFindRoleParams;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole;
	}

	/**
	 * @description Retrieves all roles for a specific organization and product.
	 * @tags organization roles
	 * @name RolesDetail2
	 * @summary Get organization roles
	 * @request GET:/roles/{product_id}/{organization_id}
	 * @originalName rolesDetail
	 * @duplicate
	 */
	export namespace RolesDetail2 {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole[];
	}

	/**
	 * @description Creates a new role within an organization with the specified product.
	 * @tags organization roles
	 * @name RolesCreate
	 * @summary Create organization role
	 * @request POST:/roles/{product_id}/{organization_id}
	 */
	export namespace RolesCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RolesCreateOrganizationRoleParams;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole;
	}

	/**
	 * @description Retrieves the list of roles for a given user list in a organization.
	 * @tags organization roles
	 * @name UsersCreate
	 * @summary Get organization roles for users
	 * @request POST:/roles/{product_id}/{organization_id}/users
	 */
	export namespace UsersCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RolesGetOrganizationRolesForUsersBody;
		export type RequestHeaders = {};
		export type ResponseBody = TypesUserRole[];
	}

	/**
	 * @description Retrieves a specific role by ID for a given organization and product.
	 * @tags organization roles
	 * @name RolesDetail3
	 * @summary Get specific organization role
	 * @request GET:/roles/{product_id}/{organization_id}/{role_id}
	 * @originalName rolesDetail
	 * @duplicate
	 */
	export namespace RolesDetail3 {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
			/** Role ID */
			roleId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole;
	}

	/**
	 * @description Updates an existing role within an organization by role ID.
	 * @tags organization roles
	 * @name RolesUpdate
	 * @summary Update organization role
	 * @request PUT:/roles/{product_id}/{organization_id}/{role_id}
	 */
	export namespace RolesUpdate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
			/** Role ID */
			roleId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RolesUpdateOrganizationRoleParams;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole;
	}

	/**
	 * @description Deletes a specific role within an organization by role ID.
	 * @tags organization roles
	 * @name RolesDelete
	 * @summary Delete organization role
	 * @request DELETE:/roles/{product_id}/{organization_id}/{role_id}
	 */
	export namespace RolesDelete {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
			/** Role ID */
			roleId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserFlags;
	}

	/**
	 * @description Duplicates a specific role within an organization by role ID with a new code.
	 * @tags organization roles
	 * @name DuplicateCreate
	 * @summary Duplicate organization role
	 * @request POST:/roles/{product_id}/{organization_id}/{role_id}/duplicate
	 */
	export namespace DuplicateCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
			/** Role ID */
			roleId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RolesDuplicateOrganizationRoleParams;
		export type RequestHeaders = {};
		export type ResponseBody = RolesRole;
	}
}

export namespace Session {
	/**
	 * @description Check if the given list of users are members of the given workspace within the organization.
	 * @tags session workspaces
	 * @name OrganizationsWorkspacesUsersCreate
	 * @summary Check if the given users are members of the organization.
	 * @request POST:/session/{product_id}/organizations/{organization_id}/workspaces/{workspace_id}/users
	 */
	export namespace OrganizationsWorkspacesUsersCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
			/** Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SessionCheckWorkspaceUsersPayload;
		export type RequestHeaders = {};
		export type ResponseBody = Record<string, boolean>;
	}
}

export namespace SharedProject {
	/**
	 * @description Get shared project for the given hash.
	 * @tags projects
	 * @name GetSharedProject
	 * @summary SharedProject
	 * @request GET:/shared-project/{hash}/project
	 * @secure
	 */
	export namespace GetSharedProject {
		export type RequestParams = {
			/** Share hash identifier */
			hash: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSharedProject[];
	}

	/**
	 * @description Create time-entry in shared project for the given hash.
	 * @tags projects
	 * @name PostSharedProjectTimeEntries
	 * @summary SharedProjectTimeEntry
	 * @request GET:/shared-project/{hash}/time-entries
	 * @secure
	 */
	export namespace PostSharedProjectTimeEntries {
		export type RequestParams = {
			/** Share hash identifier */
			hash: string;
		};
		export type RequestQuery = {};
		export type RequestBody = TimeentryPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}
}

export namespace Smail {
	/**
	 * @description Send an email to a contact
	 * @tags smail
	 * @name PostSmailContact
	 * @summary Send an email to a contact
	 * @request POST:/smail/contact
	 * @secure
	 */
	export namespace PostSmailContact {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = SmailContactPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Send an email for a demo
	 * @tags smail
	 * @name PostSmailDemo
	 * @summary Send an email for a demo
	 * @request POST:/smail/demo
	 * @secure
	 */
	export namespace PostSmailDemo {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = SmailDemoPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Send an email for meet with message and location
	 * @tags smail
	 * @name PostSmailMeet
	 * @summary Send an email for meet
	 * @request POST:/smail/meet
	 * @secure
	 */
	export namespace PostSmailMeet {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = SmailMeetPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
}

export namespace Status {
	/**
	 * @description Returns API status.
	 * @tags status
	 * @name GetStatus
	 * @summary Status
	 * @request GET:/status
	 */
	export namespace GetStatus {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
}

export namespace Subscriptions {
	/**
	 * @description Get all available plans along with all features available per plan.
	 * @tags subscription
	 * @name GetAllPlans
	 * @summary Get all available plans and features.
	 * @request GET:/subscriptions/plans
	 */
	export namespace GetAllPlans {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsPlanWithFeatures[][];
	}
}

export namespace SyncServer {
	/**
	 * @description Gets all goals for the requesting user.
	 * @name MeGoalsList
	 * @summary Get a list of user goals
	 * @request GET:/sync-server/me/goals
	 * @secure
	 */
	export namespace MeGoalsList {
		export type RequestParams = {};
		export type RequestQuery = {
			/** archived goals */
			active?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlergoalsAPIResponse[];
	}
}

export namespace Timeline {
	/**
	 * @description Get timeline events
	 * @tags timeline
	 * @name TimelineList
	 * @summary Get timeline events
	 * @request GET:/timeline
	 * @secure
	 */
	export namespace TimelineList {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Unix timestamp of the start date */
			start_date?: number;
			/** Unix timestamp of the end date */
			end_date?: number;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimelineEvent[];
	}

	/**
	 * @description Save timeline events and returns timeline settings
	 * @tags timeline
	 * @name TimelineCreate
	 * @summary Save timeline events
	 * @request POST:/timeline
	 */
	export namespace TimelineCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = ModelsTimelineEvent[];
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimelineSettings;
	}

	/**
	 * @description Delete all timeline data for the current user
	 * @tags timeline
	 * @name TimelineDelete
	 * @summary Delete all timeline data
	 * @request DELETE:/timeline
	 */
	export namespace TimelineDelete {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}
}

export namespace Timezones {
	/**
	 * @description Returns known timezones.
	 * @tags timezones
	 * @name GetTimezones
	 * @summary Timezones
	 * @request GET:/timezones
	 */
	export namespace GetTimezones {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string[];
	}

	/**
	 * @description Returns known timezones with their offsets.
	 * @tags timezones
	 * @name GetOffsets
	 * @summary Offsets
	 * @request GET:/timezones/offsets
	 */
	export namespace GetOffsets {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimezone[];
	}
}

export namespace Users {
	/**
	 * @description Creation user entity roles.
	 * @tags user entity roles
	 * @name RolesCreate
	 * @summary Post organization user entity roles
	 * @request POST:/users/{product_id}/roles
	 */
	export namespace RolesCreate {
		export type RequestParams = {
			/** Product ID */
			productId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UsersEntityRole[];
		export type RequestHeaders = {};
		export type ResponseBody = TypesUserRole[];
	}

	/**
	 * @description Retrieves the list of users for a given role list in a organization.
	 * @tags organization users
	 * @name RolesCreate2
	 * @summary Get organization users for roles
	 * @request POST:/users/{product_id}/{organization_id}/roles
	 * @originalName rolesCreate
	 * @duplicate
	 */
	export namespace RolesCreate2 {
		export type RequestParams = {
			/** Product ID */
			productId: number;
			/** Organization ID */
			organizationId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UsersGetOrganizationUsersForRolesBody;
		export type RequestHeaders = {};
		export type ResponseBody = TypesUserRole[];
	}
}

export namespace Warehouse {
	/**
	 * @description Regenerates aggregations for a given set of workspace IDs. The type of aggregations to be regenerated will either be project-total-time or planed-task-total-time.
	 * @tags warehouse-aggregations
	 * @name GenerateAggregations
	 * @summary Regenerates aggregations for a given set of workspace IDs.
	 * @request POST:/warehouse/aggregations/generate
	 */
	export namespace GenerateAggregations {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = WebAggregationsGenerationRequest;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
}

export namespace Workspaces {
	/**
	 * @description Lists Public subscription plans.
	 * @tags subscription
	 * @name GetPublicSubscriptionPlans
	 * @summary Public Subscription Plans
	 * @request GET:/workspaces/plans
	 */
	export namespace GetPublicSubscriptionPlans {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BillingFancyPlan[];
	}

	/**
	 * @description Get information of single workspace.
	 * @tags workspaces
	 * @name GetWorkspace
	 * @summary Get single workspace
	 * @request GET:/workspaces/{workspace_id}
	 * @secure
	 */
	export namespace GetWorkspace {
		export type RequestParams = {
			/** Numeric Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsWorkspace;
	}

	/**
	 * @description Update a specific workspace.
	 * @tags workspaces
	 * @name PutWorkspaces
	 * @summary Update workspace
	 * @request PUT:/workspaces/{workspace_id}
	 * @secure
	 */
	export namespace PutWorkspaces {
		export type RequestParams = {
			/** Numeric Workspace ID */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = WorkspacePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsWorkspace;
	}

	/**
	 * @description Returns a list of existing alerts
	 * @tags alerts
	 * @name GetAlerts
	 * @summary Alerts
	 * @request GET:/workspaces/{workspace_id}/alerts
	 */
	export namespace GetAlerts {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAlert[];
	}

	/**
	 * @description Handles POST alert requests.
	 * @tags alerts, workspaces
	 * @name PostAlerts
	 * @summary Alerts
	 * @request POST:/workspaces/{workspace_id}/alerts
	 * @secure
	 */
	export namespace PostAlerts {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = object & {
			project_id?: number;
			receiver_roles?: string[];
			receiver_users?: number[];
			source_kind?: string;
			threshold_type?: string;
			thresholds?: number[];
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAlert;
	}

	/**
	 * @description Handles PUT alert requests.
	 * @tags alerts
	 * @name PutAlerts
	 * @summary Alerts
	 * @request PUT:/workspaces/{workspace_id}/alerts/{alert_id}
	 * @secure
	 */
	export namespace PutAlerts {
		export type RequestParams = {
			workspaceId: string;
			alertId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = object & {
			project_id?: number;
			receiver_roles?: string[];
			receiver_users?: number[];
			source_kind?: string;
			threshold_type?: string;
			thresholds?: number[];
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsAlert;
	}

	/**
	 * @description Handles DELETE alert requests.
	 * @tags alerts, workspaces
	 * @name DeleteAlerts
	 * @summary Alerts
	 * @request DELETE:/workspaces/{workspace_id}/alerts/{alert_id}
	 * @secure
	 */
	export namespace DeleteAlerts {
		export type RequestParams = {
			workspaceId: string;
			alertId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List clients from workspace.
	 * @tags clients
	 * @name GetWorkspaceClients
	 * @summary List clients
	 * @request GET:/workspaces/{workspace_id}/clients
	 * @secure
	 */
	export namespace GetWorkspaceClients {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Use 'active' to only list active clients, 'archived' to only list archived clients and 'both' to retrieve active and archived clients. If not provided, only active clients are returned. */
			status?: string;
			/** If provided, allows to filter by client name in a case insensitive manner, returning all the ones that contain the given string. */
			name?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient[];
	}

	/**
	 * @description Create workspace client.
	 * @tags clients
	 * @name PostWorkspaceClients
	 * @summary Create client
	 * @request POST:/workspaces/{workspace_id}/clients
	 * @secure
	 */
	export namespace PostWorkspaceClients {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ClientPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient;
	}

	/**
	 * @description List clients from workspace by client_ids
	 * @tags clients
	 * @name GetWorkspaceClientsData
	 * @summary List clients for given client_ids
	 * @request POST:/workspaces/{workspace_id}/clients/data
	 * @secure
	 */
	export namespace GetWorkspaceClientsData {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsIntArray;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient[];
	}

	/**
	 * @description Load client from workspace.
	 * @tags clients
	 * @name GetWorkspaceClient
	 * @summary Load client from ID
	 * @request GET:/workspaces/{workspace_id}/clients/{client_id}
	 * @secure
	 */
	export namespace GetWorkspaceClient {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the client */
			clientId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient;
	}

	/**
	 * @description Update workspace client. Note: use /workspaces/{workspace_id}/clients/{client_id}/archive to archive the client and /workspaces/{workspace_id}/clients/{client_id}/restore to restore it.
	 * @tags clients
	 * @name PutWorkspaceClients
	 * @summary Change client
	 * @request PUT:/workspaces/{workspace_id}/clients/{client_id}
	 * @secure
	 */
	export namespace PutWorkspaceClients {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the client */
			clientId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ClientPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient;
	}

	/**
	 * @description Delete workspace client.
	 * @tags clients
	 * @name DeleteWorkspaceClients
	 * @summary Delete client
	 * @request DELETE:/workspaces/{workspace_id}/clients/{client_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceClients {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the client */
			clientId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = number;
	}

	/**
	 * @description Archives a workspace client and related projects. Only for premium workspaces.
	 * @tags clients
	 * @name ArchiveClient
	 * @summary Archives client
	 * @request POST:/workspaces/{workspace_id}/clients/{client_id}/archive
	 * @secure
	 */
	export namespace ArchiveClient {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the client */
			clientId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsIntArray;
	}

	/**
	 * @description Restores client and all related or specified projects from the given workspace.
	 * @tags clients
	 * @name RestoreClient
	 * @summary Restores client and related projects.
	 * @request POST:/workspaces/{workspace_id}/clients/{client_id}/restore
	 * @secure
	 */
	export namespace RestoreClient {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the client */
			clientId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectRestoreParams;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsClient;
	}

	/**
	 * @description Get the currencies for a given workspace.
	 * @tags subscription
	 * @name GetWorkspaceCurrencies
	 * @summary Get workspace currencies
	 * @request GET:/workspaces/{workspace_id}/currencies
	 * @secure
	 */
	export namespace GetWorkspaceCurrencies {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string[];
	}

	/**
	 * @description Dashboard's main purpose is to give an overview of what users in the workspace are doing and have been doing. The activity object holds the data of 20 latest actions in the workspace or latest activity for every workspace user. Activity object has the following properties * user_id: user ID * project_id: project ID (ID is 0 if time entry doesn't have project connected to it) * duration: time entry duration in seconds. If the time entry is currently running, the duration attribute contains a negative value, denoting the start of the time entry in seconds since epoch (Jan 1 1970). The correct duration can be calculated as current_time + duration, where current_time is the current time in seconds since epoch. * description: (Description property is not present if time entry description is empty) * stop: time entry stop time (ISO 8601 date and time. Stop property is not present when time entry is still running) * tid: task id, if applicable
	 * @tags dashboard
	 * @name GetWorkspaceAllActivities
	 * @summary Get last activity for every workspace user
	 * @request GET:/workspaces/{workspace_id}/dashboard/all_activity
	 * @secure
	 */
	export namespace GetWorkspaceAllActivities {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Filter activities since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = DashboardAllActivities[];
	}

	/**
	 * @description Dashboard's main purpose is to give an overview of what users in the workspace are doing and have been doing. The most active user object holds the data of the top 5 users who have tracked the most time during last 7 days. Most active user object has the following properties * user_id: user ID * duration: Sum of time entry durations that have been created during last 7 days.
	 * @tags dashboard
	 * @name GetWorkspaceMostActive
	 * @summary Get most active users
	 * @request GET:/workspaces/{workspace_id}/dashboard/most_active
	 * @secure
	 */
	export namespace GetWorkspaceMostActive {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Filter activities since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsMostActiveUser[];
	}

	/**
	 * @description Dashboard's main purpose is to give an overview of what users in the workspace are doing and have been doing. Return objects are same as with the `/workspaces/{workspace_id}/dashboard/all_activity` request.
	 * @tags dashboard
	 * @name GetWorkspaceTopActivity
	 * @summary Get top activities
	 * @request GET:/workspaces/{workspace_id}/dashboard/top_activity
	 * @secure
	 */
	export namespace GetWorkspaceTopActivity {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Filter activities since this date using UNIX timestamp. */
			since?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = DashboardAllActivities[];
	}

	/**
	 * @description List of workspace download requests from a given workspace.
	 * @tags exports
	 * @name GetWorkspaceExports
	 * @summary Get a list with the workspace download requests
	 * @request GET:/workspaces/{workspace_id}/exports
	 * @secure
	 */
	export namespace GetWorkspaceExports {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsDownloadRequestRecord[];
	}

	/**
	 * @description List of workspaces downloaded from a given workspace.
	 * @tags exports
	 * @name PostWorkspaceExports
	 * @summary Post a list with the workspace to be downloaded
	 * @request POST:/workspaces/{workspace_id}/exports
	 * @secure
	 */
	export namespace PostWorkspaceExports {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = string[];
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Send a zip file List of workspace download requests from a given workspace.
	 * @tags exports
	 * @name GetWorkspaceExportsDataUuidZip
	 * @summary Get the zip file with workspace download requests
	 * @request GET:/workspaces/{workspace_id}/exports/data/{uuid}.zip
	 * @secure
	 */
	export namespace GetWorkspaceExportsDataUuidZip {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			uuid: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Gets all goals for the requesting user in the workspace.
	 * @tags goals
	 * @name GoalsDetail
	 * @summary Get a list of goals
	 * @request GET:/workspaces/{workspace_id}/goals
	 * @secure
	 */
	export namespace GoalsDetail {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {
			/** team goals */
			team_goals?: boolean;
			/** archived goals */
			active?: boolean;
			/** Page number, default 1. */
			page?: number;
			/** Number of items per page, default 20. Also defaults to 100 if provided a value greater than 100. */
			per_page?: number;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlergoalsAPIResponse[];
	}

	/**
	 * @description Create a Goal object with its parameters.
	 * @tags goals
	 * @name GoalsCreate
	 * @summary Create a Goal
	 * @request POST:/workspaces/{workspace_id}/goals
	 * @secure
	 */
	export namespace GoalsCreate {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = HandlergoalsCreatePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsGoal;
	}

	/**
	 * @description Gets a goal that relates to the calling user in the specified workspace.
	 * @tags goals
	 * @name GoalsDetail2
	 * @summary Get one goal
	 * @request GET:/workspaces/{workspace_id}/goals/{goal_id}
	 * @originalName goalsDetail
	 * @duplicate
	 * @secure
	 */
	export namespace GoalsDetail2 {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** Goal ID */
			goalId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = HandlergoalsAPIResponse;
	}

	/**
	 * @description Update a goal with the updatable parameters given by UpdatePayload
	 * @tags goals
	 * @name GoalsUpdate
	 * @summary Update a Goal
	 * @request PUT:/workspaces/{workspace_id}/goals/{goal_id}
	 * @secure
	 */
	export namespace GoalsUpdate {
		export type RequestParams = {
			workspaceId: string;
			goalId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = HandlergoalsUpdatePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsGoal;
	}

	/**
	 * @description Delete a goal that was created by the calling user
	 * @tags goals
	 * @name GoalsDelete
	 * @summary Delete one goal
	 * @request DELETE:/workspaces/{workspace_id}/goals/{goal_id}
	 * @secure
	 */
	export namespace GoalsDelete {
		export type RequestParams = {
			/** Workspace ID */
			workspaceId: number;
			/** Goal ID */
			goalId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Returns a list of groups for the specified workspace.
	 * @tags groups
	 * @name GetWorkspaceGroups
	 * @summary Get workspace groups
	 * @request GET:/workspaces/{workspace_id}/groups
	 * @deprecated
	 */
	export namespace GetWorkspaceGroups {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsGroup[];
	}

	/**
	 * @description Creates a group in the specified workspace
	 * @tags groups
	 * @name PostWorkspaceGroup
	 * @summary Create group
	 * @request POST:/workspaces/{workspace_id}/groups
	 */
	export namespace PostWorkspaceGroup {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupNamePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsGroup;
	}

	/**
	 * @description Updates the group.
	 * @tags groups
	 * @name PutWorkspaceGroup
	 * @summary Update group
	 * @request PUT:/workspaces/{workspace_id}/groups/{group_id}
	 */
	export namespace PutWorkspaceGroup {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the group. */
			groupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupNamePayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsGroup;
	}

	/**
	 * @description Deletes the group.
	 * @tags groups
	 * @name DeleteWorkspaceGroup
	 * @summary Delete group
	 * @request DELETE:/workspaces/{workspace_id}/groups/{group_id}
	 */
	export namespace DeleteWorkspaceGroup {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the group. */
			groupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Reset the iCal token for a given workspace.
	 * @tags ical
	 * @name PostWorkspaceIcalReset
	 * @summary Reset iCal token
	 * @request POST:/workspaces/{workspace_id}/ical/reset
	 * @secure
	 */
	export namespace PostWorkspaceIcalReset {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Toggle the iCal token on/off for a given workspace.
	 * @tags ical
	 * @name PostWorkspaceIcalToggle
	 * @summary Toggle the iCal token
	 * @request POST:/workspaces/{workspace_id}/ical/toggle
	 * @secure
	 */
	export namespace PostWorkspaceIcalToggle {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get invoices for given workspace with pagination.
	 * @tags user-invoices
	 * @name GetWorkspaceInvoices
	 * @summary Get workspace invoices.
	 * @request GET:/workspaces/{workspace_id}/invoices
	 * @secure
	 */
	export namespace GetWorkspaceInvoices {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Sort order, default ASC. */
			sort_order?: string;
			/** Number of items per page, default 50. */
			per_page?: number;
			/** Page number, default 1. */
			page?: number;
			/** Sort field, default created_at. */
			sort_field?: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsUserInvoice[];
	}

	/**
	 * @description Creates new user invoice.
	 * @tags user-invoices
	 * @name PostWorkspaceUserInvoice
	 * @summary Create user invoice
	 * @request POST:/workspaces/{workspace_id}/invoices
	 * @secure
	 */
	export namespace PostWorkspaceUserInvoice {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsUserInvoice;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsUserInvoice[];
	}

	/**
	 * @description Returns an Invoice document in PDF form.
	 * @tags subscription
	 * @name GetWorkspaceInvoices2
	 * @summary InvoicePdf
	 * @request GET:/workspaces/{workspace_id}/invoices/{invoice_id}.pdf
	 * @originalName getWorkspaceInvoices
	 * @duplicate
	 * @secure
	 */
	export namespace GetWorkspaceInvoices2 {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the invoice. */
			invoiceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Deletes user invoice by ID if exists.
	 * @tags user-invoices
	 * @name DeleteWorkspaceInvoice
	 * @summary Delete user invoice.
	 * @request DELETE:/workspaces/{workspace_id}/invoices/{user_invoice_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceInvoice {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** User invoice ID to be deleted */
			userInvoiceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns a list of SSO profiles that are linked to the given workspace.
	 * @tags authentication
	 * @name GetWorkspaceSso
	 * @summary Get linked SSO profiles for a workspace
	 * @request GET:/workspaces/{workspace_id}/linked_sso_profiles
	 */
	export namespace GetWorkspaceSso {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = AccountsLinkedSsoProfile[];
	}

	/**
	 * @description Link the workspace with the given ID to an SSO profile with the given ID.
	 * @tags authentication
	 * @name PutWorkspaceSso
	 * @summary Link SSO profile to a workspace
	 * @request PUT:/workspaces/{workspace_id}/linked_sso_profiles/{sso_profile_id}
	 */
	export namespace PutWorkspaceSso {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the SSO profile */
			ssoProfileId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = AccountsLinkedSsoProfile[];
	}

	/**
	 * @description Unlink the workspace from an SSO profile.
	 * @tags authentication
	 * @name DeleteWorkspaceLinkedSsoProfiles
	 * @summary Unlink the workspace from an SSO profile.
	 * @request DELETE:/workspaces/{workspace_id}/linked_sso_profiles/{sso_profile_id}
	 */
	export namespace DeleteWorkspaceLinkedSsoProfiles {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the SSO profile */
			ssoProfileId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = AccountsLinkedSsoProfile[];
	}

	/**
	 * @description Get the logo for a given workspace.
	 * @tags workspaces/logo
	 * @name GetWorkspaceLogo
	 * @summary Get workspace logo
	 * @request GET:/workspaces/{workspace_id}/logo
	 * @secure
	 */
	export namespace GetWorkspaceLogo {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsLogo;
	}

	/**
	 * @description Post the logo for a given workspace.
	 * @tags workspaces/logo
	 * @name PostWorkspaceLogo
	 * @summary Post workspace logo
	 * @request POST:/workspaces/{workspace_id}/logo
	 * @secure
	 */
	export namespace PostWorkspaceLogo {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsLogo;
	}

	/**
	 * @description Delete the logo for a given workspace.
	 * @tags workspaces/logo
	 * @name GetWorkspaceLogo2
	 * @summary Delete workspace logo
	 * @request DELETE:/workspaces/{workspace_id}/logo
	 * @originalName getWorkspaceLogo
	 * @duplicate
	 * @secure
	 */
	export namespace GetWorkspaceLogo2 {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsLogo;
	}

	/**
	 * @description Returns payment receipt pdf file.
	 * @tags subscription
	 * @name GetWorkspacePaymentReceipts
	 * @summary PaymentReceipts
	 * @request GET:/workspaces/{workspace_id}/payment_receipts/{payment_id}.pdf
	 * @secure
	 */
	export namespace GetWorkspacePaymentReceipts {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the receipt */
			paymentId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get the preferences for a given workspace.
	 * @tags preferences
	 * @name GetWorkspacePreferences
	 * @summary Get workspace preferences
	 * @request GET:/workspaces/{workspace_id}/preferences
	 * @secure
	 */
	export namespace GetWorkspacePreferences {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsLogo;
	}

	/**
	 * @description Get the preferences for a given workspace.
	 * @tags preferences
	 * @name PostWorkspacePreferences
	 * @summary Get workspace preferences
	 * @request POST:/workspaces/{workspace_id}/preferences
	 * @secure
	 */
	export namespace PostWorkspacePreferences {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsWorkspacePreferences;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsLogo;
	}

	/**
	 * @description Get project groups for given workspace.
	 * @tags groups
	 * @name GetProjectGroups
	 * @summary Get workspace project groups.
	 * @request GET:/workspaces/{workspace_id}/project_groups
	 * @secure
	 */
	export namespace GetProjectGroups {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = {
			/** Project IDs separated by comma. */
			project_ids: string;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProjectGroup[];
	}

	/**
	 * @description Adds group to project for given workspace.
	 * @tags groups
	 * @name PostProjectGroup
	 * @summary Adds group to project.
	 * @request POST:/workspaces/{workspace_id}/project_groups
	 * @secure
	 */
	export namespace PostProjectGroup {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = GroupProjectGroupPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Remove project group for a given workspace.
	 * @tags groups
	 * @name DeleteProjectGroup
	 * @summary Remove project group.
	 * @request DELETE:/workspaces/{workspace_id}/project_groups/{project_group_id}
	 * @secure
	 */
	export namespace DeleteProjectGroup {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project group */
			projectGroupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List all projects users for a given workspace.
	 * @tags projects
	 * @name GetWorkspaceProjectUsers
	 * @summary Get workspace projects users
	 * @request GET:/workspaces/{workspace_id}/project_users
	 * @secure
	 */
	export namespace GetWorkspaceProjectUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Numeric IDs of projects, comma-separated */
			project_ids?: string;
			/** Numeric ID of user, if passed returns only project users for this user's projects */
			user_id?: string;
			/** Include group members */
			with_group_members?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProjectUser[];
	}

	/**
	 * @description Include a project user for a given workspace.
	 * @tags projects
	 * @name PostWorkspaceProjectUsers
	 * @summary Add an user into workspace projects users
	 * @request POST:/workspaces/{workspace_id}/project_users
	 * @secure
	 */
	export namespace PostWorkspaceProjectUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UserPostPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProjectUser;
	}

	/**
	 * @description Patch a list of project users for a given workspace.
	 * @tags projects
	 * @name PatchWorkspaceProjectUsersIds
	 * @summary Patch project users from workspace
	 * @request PATCH:/workspaces/{workspace_id}/project_users/{project_user_ids}
	 * @secure
	 */
	export namespace PatchWorkspaceProjectUsersIds {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			projectUserIds: string;
		};
		export type RequestQuery = {
			/** Numeric IDs of the project users */
			project_user_ids: number[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserOutput;
	}

	/**
	 * @description Update the data for a project user for a given workspace.
	 * @tags projects
	 * @name PutWorkspaceProjectUsers
	 * @summary Update an user into workspace projects users
	 * @request PUT:/workspaces/{workspace_id}/project_users/{project_user_id}
	 * @secure
	 */
	export namespace PutWorkspaceProjectUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project user */
			projectUserId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UserPutPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProjectUser;
	}

	/**
	 * @description Delete a project user for a given workspace.
	 * @tags projects
	 * @name DeleteWorkspaceProjectUsers
	 * @summary Delete a project user from workspace projects users
	 * @request DELETE:/workspaces/{workspace_id}/project_users/{project_user_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceProjectUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project user */
			projectUserId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = number;
	}

	/**
	 * @description Get projects for given workspace.
	 * @tags projects
	 * @name GetProjects
	 * @summary WorkspaceProjects
	 * @request GET:/workspaces/{workspace_id}/projects
	 * @secure
	 */
	export namespace GetProjects {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Place pinned projects at top of response */
			sort_pinned: boolean;
		};
		export type RequestBody = {
			/** Return active or inactive project. You can pass 'both' to get both active and inactive projects. */
			active?: boolean;
			/** Retrieve projects created/modified/deleted since this date using UNIX timestamp. */
			since?: number;
			/** billable */
			billable?: boolean;
			/** user_ids */
			user_ids?: any[];
			/** client_ids */
			client_ids?: any[];
			/** group_ids */
			group_ids?: any[];
			/** statuses */
			statuses?: any[];
			/** name */
			name: string;
			/** page */
			page: number;
			/** sort_field */
			sort_field: string;
			/** sort_order */
			sort_order: string;
			/** only_templates */
			only_templates: boolean;
			/** get only projects assigned to the current user */
			only_me?: boolean;
			/** Number of items per page, default 151. Cannot exceed 200. */
			per_page?: number;
		};
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject[];
	}

	/**
	 * @description Create project for given workspace.
	 * @tags projects
	 * @name PostWorkspaceProjectCreate
	 * @summary WorkspaceProjects
	 * @request POST:/workspaces/{workspace_id}/projects
	 * @secure
	 */
	export namespace PostWorkspaceProjectCreate {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject;
	}

	/**
	 * @description Get projects billable amounts
	 * @tags projects
	 * @name ProjectsBillableAmountsCreate
	 * @summary Projects
	 * @request POST:/workspaces/{workspace_id}/projects/billable-amounts
	 * @secure
	 */
	export namespace ProjectsBillableAmountsCreate {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectsPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject[];
	}

	/**
	 * @description Get projects templates for given workspace.
	 * @tags projects
	 * @name GetProjectsTemplates
	 * @summary WorkspaceProjectsTemplates
	 * @request GET:/workspaces/{workspace_id}/projects/templates
	 * @secure
	 */
	export namespace GetProjectsTemplates {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Bulk editing workspace projects.
	 * @tags projects
	 * @name PatchWorkspaceProjects
	 * @summary WorkspaceProjects
	 * @request PATCH:/workspaces/{workspace_id}/projects/{project_ids}
	 * @secure
	 */
	export namespace PatchWorkspaceProjects {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric IDs of project ids, separated by comma. E.g.: `204301830,202700150,202687559` */
			projectIds: string;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectsPatchPost;
		export type RequestHeaders = {};
		export type ResponseBody = ProjectsPatchOutput;
	}

	/**
	 * @description Get project for given workspace.
	 * @tags projects
	 * @name ProjectsDetail
	 * @summary WorkspaceProject
	 * @request GET:/workspaces/{workspace_id}/projects/{project_id}
	 * @secure
	 */
	export namespace ProjectsDetail {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject;
	}

	/**
	 * @description Update project for given workspace.
	 * @tags projects
	 * @name PutWorkspaceProject
	 * @summary WorkspaceProject
	 * @request PUT:/workspaces/{workspace_id}/projects/{project_id}
	 * @secure
	 */
	export namespace PutWorkspaceProject {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProject;
	}

	/**
	 * @description Delete project for given workspace.
	 * @tags projects
	 * @name DeleteWorkspaceProject
	 * @summary WorkspaceProject
	 * @request DELETE:/workspaces/{workspace_id}/projects/{project_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceProject {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {
			/** Time entries deletion mode: 'delete' or 'unassign' */
			teDeletionMode?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = number;
	}

	/**
	 * @description Get recurring project periods for given workspace.
	 * @tags projects
	 * @name GetWorkspaceProjectPeriods
	 * @summary Get Recurring Project Periods
	 * @request GET:/workspaces/{workspace_id}/projects/{project_id}/periods
	 * @secure
	 */
	export namespace GetWorkspaceProjectPeriods {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {
			/** Smallest boundary date to search for recurring periods */
			start_date?: string;
			/** Biggest boundary date to search for for recurring periods */
			end_date?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsRecurringPeriod;
	}

	/**
	 * @description Pin or unpin a project to top of user's project list
	 * @tags projects
	 * @name PostPinnedProject
	 * @summary WorkspaceProjects
	 * @request POST:/workspaces/{workspace_id}/projects/{project_id}/pin
	 * @secure
	 */
	export namespace PostPinnedProject {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ProjectsPinnedProjectPayload;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Get statistics for given workspace and project. For time entry related information, this endpoint does not consider running ones.
	 * @tags projects
	 * @name ProjectsStatisticsDetail
	 * @summary WorkspaceProject
	 * @request GET:/workspaces/{workspace_id}/projects/{project_id}/statistics
	 * @secure
	 */
	export namespace ProjectsStatisticsDetail {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsProjectStatistics;
	}

	/**
	 * @description Get project tasks for given workspace.
	 * @tags tasks
	 * @name GetWorkspaceProjectTasks
	 * @summary WorkspaceProjectTasks
	 * @request GET:/workspaces/{workspace_id}/projects/{project_id}/tasks
	 * @secure
	 */
	export namespace GetWorkspaceProjectTasks {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask;
	}

	/**
	 * @description Post project tasks for given workspace.
	 * @tags tasks
	 * @name PostWorkspaceProjectTasks
	 * @summary WorkspaceProjectTasks
	 * @request POST:/workspaces/{workspace_id}/projects/{project_id}/tasks
	 * @secure
	 */
	export namespace PostWorkspaceProjectTasks {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TaskPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask;
	}

	/**
	 * @description Patch project tasks for given workspace.
	 * @tags tasks
	 * @name PatchWorkspaceProjectTasks
	 * @summary WorkspaceProjectTasks
	 * @request PATCH:/workspaces/{workspace_id}/projects/{project_id}/tasks/{task_ids}
	 * @secure
	 */
	export namespace PatchWorkspaceProjectTasks {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
			/** Numeric IDs of project tasks separated by comma */
			taskIds: string;
		};
		export type RequestQuery = {};
		export type RequestBody = TaskPatchInput[];
		export type RequestHeaders = {};
		export type ResponseBody = TaskPatchOutput;
	}

	/**
	 * @description Get project task for given task id.
	 * @tags tasks
	 * @name GetWorkspaceProjectTask
	 * @summary WorkspaceProjectTask
	 * @request GET:/workspaces/{workspace_id}/projects/{project_id}/tasks/{task_id}
	 * @secure
	 */
	export namespace GetWorkspaceProjectTask {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
			/** Numeric ID of the task */
			taskId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask;
	}

	/**
	 * @description Put project task for given workspace.
	 * @tags tasks
	 * @name PutWorkspaceProjectTask
	 * @summary WorkspaceProjectTask
	 * @request PUT:/workspaces/{workspace_id}/projects/{project_id}/tasks/{task_id}
	 * @secure
	 */
	export namespace PutWorkspaceProjectTask {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
			/** Numeric ID of project task */
			taskId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = TaskPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTask;
	}

	/**
	 * @description Delete projects task for given workspace.
	 * @tags tasks
	 * @name DeleteWorkspaceProjectTask
	 * @summary WorkspaceProjectTask
	 * @request DELETE:/workspaces/{workspace_id}/projects/{project_id}/tasks/{task_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceProjectTask {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the project */
			projectId: number;
			/** Numeric ID of the task */
			taskId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Creates a new rate.
	 * @tags workspaces
	 * @name CreateRate
	 * @summary Rates creation
	 * @request POST:/workspaces/{workspace_id}/rates
	 * @secure
	 */
	export namespace CreateRate {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RatesCreationRequest;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * @description Get rates by level(workspace|project|task|user).
	 * @tags workspaces
	 * @name GetRatesByLevel
	 * @summary Rates list
	 * @request GET:/workspaces/{workspace_id}/rates/{level}/{level_id}
	 * @secure
	 */
	export namespace GetRatesByLevel {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Rates level: workspace, project, task or user */
			level: string;
			/** Numeric ID of the entity level */
			levelId: number;
		};
		export type RequestQuery = {
			/** Type of rate values to be returned: `billable_rates` or `labor_costs`. Default is `billable_rates`. */
			type?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsRate[];
	}

	/**
	 * @description Get shared report.
	 * @tags saved_reports
	 * @name GetSharedReport
	 * @summary workspace.SharedReport
	 * @request GET:/workspaces/{workspace_id}/reports/shared
	 * @secure
	 */
	export namespace GetSharedReport {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {
			fixed_dates?: boolean;
			name?: string;
			page?: number;
			per_page?: number;
			public?: boolean;
			requestingUserID?: number;
			scheduled?: boolean;
			sort_direction?: string;
			sort_field?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport[];
	}

	/**
	 * @description Change shared report.
	 * @tags saved_reports
	 * @name PutSharedReport
	 * @summary workspace.SharedReport
	 * @request PUT:/workspaces/{workspace_id}/reports/shared
	 * @secure
	 */
	export namespace PutSharedReport {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the report. */
			reportId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SavedPayload[];
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport;
	}

	/**
	 * @description Add shared report.
	 * @tags saved_reports
	 * @name PostSharedReport
	 * @summary workspace.SharedReport
	 * @request POST:/workspaces/{workspace_id}/reports/shared
	 * @secure
	 */
	export namespace PostSharedReport {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SavedPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport;
	}

	/**
	 * @description Bulk delete saved reports.
	 * @tags saved_reports
	 * @name BulkDeleteSavedReportResource
	 * @summary SavedReport
	 * @request PATCH:/workspaces/{workspace_id}/reports/shared/bulk_delete
	 * @secure
	 */
	export namespace BulkDeleteSavedReportResource {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SharedBulkDeleteInputData;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport[];
	}

	/**
	 * @description Get a saved report.
	 * @tags saved_reports
	 * @name GetSavedReportResource
	 * @summary models.SavedReport
	 * @request GET:/workspaces/{workspace_id}/reports/shared/{report_id}
	 * @secure
	 */
	export namespace GetSavedReportResource {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the report. */
			reportId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport;
	}

	/**
	 * @description Change saved report.
	 * @tags saved_reports
	 * @name PutSavedReportResource
	 * @summary models.SavedReport
	 * @request PUT:/workspaces/{workspace_id}/reports/shared/{report_id}
	 * @secure
	 */
	export namespace PutSavedReportResource {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the report. */
			reportId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = SavedPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport;
	}

	/**
	 * @description Delete saved report.
	 * @tags saved_reports
	 * @name DeleteSavedReportResource
	 * @summary models.SavedReport
	 * @request DELETE:/workspaces/{workspace_id}/reports/shared/{report_id}
	 * @secure
	 */
	export namespace DeleteSavedReportResource {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the report. */
			reportId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSavedReport;
	}

	/**
	 * @description Lists scheduled reports.
	 * @tags reports
	 * @name GetWorkspaceScheduledReports
	 * @summary ScheduledReports
	 * @request GET:/workspaces/{workspace_id}/scheduled_reports
	 * @secure
	 */
	export namespace GetWorkspaceScheduledReports {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsScheduledReport[];
	}

	/**
	 * @description Endpoint for setting up a scheduled report.
	 * @tags reports
	 * @name PostWorkspaceScheduledReports
	 * @summary ScheduledReports
	 * @request POST:/workspaces/{workspace_id}/scheduled_reports
	 * @secure
	 */
	export namespace PostWorkspaceScheduledReports {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ScheduledPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsScheduledReport;
	}

	/**
	 * @description Endpoint for delete a scheduled report.
	 * @tags reports
	 * @name DeleteWorkspaceScheduledReports
	 * @summary ScheduledReport
	 * @request DELETE:/workspaces/{workspace_id}/scheduled_reports/{report_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceScheduledReports {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the report */
			reportId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Returns workspace admins list, members count and groups count
	 * @tags workspaces
	 * @name GetWorkspaceStatistics
	 * @summary Workspace statistics
	 * @request GET:/workspaces/{workspace_id}/statistics
	 * @secure
	 */
	export namespace GetWorkspaceStatistics {
		export type RequestParams = {
			workspaceId: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsStatistics;
	}

	/**
	 * @description Returns subscription data.
	 * @tags subscription
	 * @name GetWorkspaceSubscription
	 * @summary Subscription
	 * @request GET:/workspaces/{workspace_id}/subscription
	 * @secure
	 */
	export namespace GetWorkspaceSubscription {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = SubscriptionOutData;
	}

	/**
	 * @description Returns a Purchase Order document in PDF form.
	 * @tags subscription
	 * @name GetWorkspacePurchaseOrderPdf
	 * @summary PurchaseOrderPdf
	 * @request GET:/workspaces/{workspace_id}/subscription/purchase_orders/{purchase_order_id}.pdf
	 * @secure
	 */
	export namespace GetWorkspacePurchaseOrderPdf {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the purchase order. */
			purchaseOrderId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List Workspace tags.
	 * @tags tags
	 * @name GetWorkspaceTag
	 * @summary Tags
	 * @request GET:/workspaces/{workspace_id}/tags
	 * @secure
	 */
	export namespace GetWorkspaceTag {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTag[];
	}

	/**
	 * @description Create workspace tags.
	 * @tags tags
	 * @name PostWorkspaceTag
	 * @summary Create tag
	 * @request POST:/workspaces/{workspace_id}/tags
	 * @secure
	 */
	export namespace PostWorkspaceTag {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TagsPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTag[];
	}

	/**
	 * @description Patch will not be executed if there are errors with some records.
	 * @tags tags
	 * @name PatchWorkspaceTags
	 * @summary Bulk delete tags
	 * @request PATCH:/workspaces/{workspace_id}/tags
	 * @secure
	 */
	export namespace PatchWorkspaceTags {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Update workspace tags.
	 * @tags tags
	 * @name PutWorkspaceTag
	 * @summary Update tag
	 * @request PUT:/workspaces/{workspace_id}/tags/{tag_id}
	 * @secure
	 */
	export namespace PutWorkspaceTag {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the tag */
			tagId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TagsPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTag[];
	}

	/**
	 * @description Delete workspace tags.
	 * @tags tags
	 * @name DeleteWorkspaceTag
	 * @summary Delete tag
	 * @request DELETE:/workspaces/{workspace_id}/tags/{tag_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceTag {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the tag */
			tagId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List Workspace tasks.
	 * @tags tasks
	 * @name GetWorkspaceTasks
	 * @summary Tasks
	 * @request GET:/workspaces/{workspace_id}/tasks
	 * @secure
	 */
	export namespace GetWorkspaceTasks {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Retrieve tasks created/modified/deleted since this date using UNIX timestamp. */
			since?: number;
			/** Page number, default 1 */
			page?: number;
			/** Number of items per page, default 50 */
			per_page?: number;
			/** Sort order, default ASC */
			sort_order?: string;
			/** Field used for sorting. Default is name. Valid values are 'name' and 'created_at' */
			sort_field?: string;
			/** Filter by active state. You can also pass 'both' to get both active and inactive tasks. */
			active?: boolean;
			/** Filter by project id */
			pid?: number;
			/**
			 * Smallest boundary date in the format YYYY-MM-DD
			 * @format date
			 */
			start_date?: string;
			/**
			 * Biggest boundary date in the format YYYY-MM-DD
			 * @format date
			 */
			end_date?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TaskResponse;
	}

	/**
	 * @description Creates a new workspace TimeEntry.
	 * @tags time_entries
	 * @name PostWorkspaceTimeEntries
	 * @summary TimeEntries
	 * @request POST:/workspaces/{workspace_id}/time_entries
	 * @secure
	 */
	export namespace PostWorkspaceTimeEntries {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
		};
		export type RequestBody = TimeentryPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}

	/**
	 * @description In short: http://tools.ietf.org/html/rfc6902 and http://tools.ietf.org/html/rfc6901 with some additions. Patch will be executed partially when there are errors with some records. No transaction, no rollback.
	 * @tags time_entries
	 * @name PatchTimeEntries
	 * @summary Bulk editing time entries
	 * @request PATCH:/workspaces/{workspace_id}/time_entries/{time_entry_ids}
	 * @secure
	 */
	export namespace PatchTimeEntries {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric IDs of time_entries, separated by comma. E.g.: `204301830,202700150,202687559`. The limit is 100 IDs per request. */
			timeEntryIds: string;
		};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
		};
		export type RequestBody = TimeentriesPatchPost;
		export type RequestHeaders = {};
		export type ResponseBody = TimeentryPatchOutput;
	}

	/**
	 * @description Updates a workspace time entry.
	 * @tags time_entries
	 * @name PutWorkspaceTimeEntryHandler
	 * @summary TimeEntries
	 * @request PUT:/workspaces/{workspace_id}/time_entries/{time_entry_id}
	 * @secure
	 */
	export namespace PutWorkspaceTimeEntryHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {
			/** Should the response contain data for meta entities */
			meta?: boolean;
			/** Should the response contain time entry sharing details */
			include_sharing?: boolean;
		};
		export type RequestBody = TimeentryPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}

	/**
	 * @description Deletes a workspace time entry.
	 * @tags time_entries
	 * @name DeleteWorkspaceTimeEntries
	 * @summary TimeEntries
	 * @request DELETE:/workspaces/{workspace_id}/time_entries/{time_entry_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceTimeEntries {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Stops a workspace time entry.
	 * @tags time_entries
	 * @name PatchWorkspaceStopTimeEntryHandler
	 * @summary Stop TimeEntry
	 * @request PATCH:/workspaces/{workspace_id}/time_entries/{time_entry_id}/stop
	 * @secure
	 */
	export namespace PatchWorkspaceStopTimeEntryHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** TimeEntry ID. */
			timeEntryId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry;
	}

	/**
	 * @description Get the time entry constraints for a given workspace.
	 * @tags workspaces, time_entry_constraints
	 * @name GetWorkspaceTimeEntryConstraints
	 * @summary Get workspace time entry constraints
	 * @request GET:/workspaces/{workspace_id}/time_entry_constraints
	 * @secure
	 */
	export namespace GetWorkspaceTimeEntryConstraints {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntryConstraints;
	}

	/**
	 * @description Post the time entry constraints for a given workspace.
	 * @tags workspaces/time_entry_constraints
	 * @name PostWorkspaceTimeEntryConstraints
	 * @summary Post workspace time entry constraints
	 * @request POST:/workspaces/{workspace_id}/time_entry_constraints
	 * @secure
	 */
	export namespace PostWorkspaceTimeEntryConstraints {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = ModelsTimeEntryConstraints;
		export type RequestHeaders = {};
		export type ResponseBody = WorkspacesJSONResult;
	}

	/**
	 * @description Get invitations for time entries
	 * @tags time_entries
	 * @name GetWorkspaceTimeEntryInvitations
	 * @summary TimeEntries
	 * @request GET:/workspaces/{workspace_id}/time_entry_invitations
	 * @secure
	 */
	export namespace GetWorkspaceTimeEntryInvitations {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TimeentriesGetTimEntryInvitationsResponse[];
	}

	/**
	 * @description Accept or reject an invitation for a time entry
	 * @tags time_entries
	 * @name PostWorkspaceTimeEntryInvitationAction
	 * @summary TimeEntries
	 * @request POST:/workspaces/{workspace_id}/time_entry_invitations/{time_entry_invitation_id}/{action}
	 * @secure
	 */
	export namespace PostWorkspaceTimeEntryInvitationAction {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the time entry invitation */
			timeEntryInvitationId: number;
			action: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get timesheet setups for a given workspace.
	 * @tags approvals, workspaces
	 * @name GetTimesheetSetups
	 * @summary Get timesheet setups
	 * @request GET:/workspaces/{workspace_id}/timesheet_setups
	 * @secure
	 */
	export namespace GetTimesheetSetups {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Numeric ID of the members, comma-separated */
			member_ids?: number;
			/** Numeric ID of the approvers, comma-separated */
			approver_ids?: number;
			/** Field used for sorting, default start_date. */
			sort_field?: string;
			/** Sort order. */
			sort_order?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsetupsGetPaginatedResponse;
	}

	/**
	 * @description Create timesheet setups.
	 * @tags approvals, workspaces
	 * @name PostTimesheetSetups
	 * @summary Create a timesheet setup
	 * @request POST:/workspaces/{workspace_id}/timesheet_setups
	 * @secure
	 */
	export namespace PostTimesheetSetups {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TimesheetsetupsCreatePayload;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsetupsAPITimesheetSetup[];
	}

	/**
	 * @description Updates a timesheet setups.
	 * @tags approvals, workspaces
	 * @name PutTimesheetSetups
	 * @summary Update a timesheet setup
	 * @request POST:/workspaces/{workspace_id}/timesheet_setups/{setup_id}
	 * @secure
	 */
	export namespace PutTimesheetSetups {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the timesheet setup */
			setupId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TimesheetsetupsUpdatePayload;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsetupsAPITimesheetSetup;
	}

	/**
	 * @description Delete a timesheet setup for a given workspace.
	 * @tags approvals, workspaces
	 * @name DeleteTimesheetSetups
	 * @summary Delete a timesheet setup
	 * @request DELETE:/workspaces/{workspace_id}/timesheet_setups/{setup_id}
	 * @secure
	 */
	export namespace DeleteTimesheetSetups {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the timesheet setup */
			setupId?: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Get timesheets applying various filters.
	 * @tags approvals, workspaces
	 * @name GetWorkspaceTimesheetsHandler
	 * @summary Get timesheets
	 * @request GET:/workspaces/{workspace_id}/timesheets
	 * @secure
	 */
	export namespace GetWorkspaceTimesheetsHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Numeric ID of the members, comma-separated */
			member_ids?: number;
			/** Numeric ID of the approvers, comma-separated */
			approver_ids?: number;
			/** Numeric ID for timesheet setup, comma-separated. */
			timesheet_setup_ids?: number;
			/** Timesheet status, comma-separated. */
			statuses?: number;
			/** Timesheets starting before this date (YYYY-MM-DD). */
			before?: number;
			/** Timesheets starting after this date (YYYY-MM-DD). */
			after?: number;
			/** Page number, default 1. */
			page?: number;
			/** Number of items per page, default 20. Also defaults to 20 if provided an greater than 1000. */
			per_page?: number;
			/** Field used for sorting, default start_date. */
			sort_field?: string;
			/** Sort order. */
			sort_order?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsGetPaginatedResponse[];
	}

	/**
	 * @description Updates a batch of timesheets.
	 * @tags approvals, workspaces
	 * @name PutWorkspaceTimesheetsHandler
	 * @summary Update a batch of timesheets
	 * @request PUT:/workspaces/{workspace_id}/timesheets
	 * @secure
	 */
	export namespace PutWorkspaceTimesheetsHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TimesheetsPutBatchTimesheetPayload;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsAPITimesheet;
	}

	/**
	 * @description Get timesheet working hours and total tracked seconds.
	 * @tags approvals, workspaces
	 * @name GetWorkspaceTimesheetHoursHandler
	 * @summary Get timesheets hours
	 * @request POST:/workspaces/{workspace_id}/timesheets/hours
	 * @secure
	 */
	export namespace GetWorkspaceTimesheetHoursHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = TimesheetsPostTimesheetHoursPayload;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsTimesheetHoursResponse[];
	}

	/**
	 * @description Updates a timesheet.
	 * @tags approvals, workspaces
	 * @name PutWorkspaceTimesheetsHandler2
	 * @summary Update timesheets
	 * @request PUT:/workspaces/{workspace_id}/timesheets/{setup_id}/{start_date}
	 * @originalName putWorkspaceTimesheetsHandler
	 * @duplicate
	 * @secure
	 */
	export namespace PutWorkspaceTimesheetsHandler2 {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the timesheet setup. */
			setupId: number;
			/** Start date (YYYY-MM-DD) of the timesheet. */
			startDate: string;
		};
		export type RequestQuery = {};
		export type RequestBody = TimesheetsPutTimesheetPayload;
		export type RequestHeaders = {};
		export type ResponseBody = TimesheetsAPITimesheet;
	}

	/**
	 * @description Get the time entries from within a timesheet timeframe.
	 * @tags approvals, workspaces
	 * @name GetWorkspaceTimesheetTimeEntriesHandler
	 * @summary Get timesheet time entries
	 * @request GET:/workspaces/{workspace_id}/timesheets/{setup_id}/{start_date}/time_entries
	 * @secure
	 */
	export namespace GetWorkspaceTimesheetTimeEntriesHandler {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the timesheet setup. */
			setupId: number;
			/** Start date (YYYY-MM-DD) of the timesheet. */
			startDate: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTimeEntry[];
	}

	/**
	 * @description Returns a list of track reminders.
	 * @tags workspaces
	 * @name GetWorkspaceTrackReminders
	 * @summary TrackReminders
	 * @request GET:/workspaces/{workspace_id}/track_reminders
	 * @secure
	 */
	export namespace GetWorkspaceTrackReminders {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTrackReminder[];
	}

	/**
	 * @description Creates a workspace tracking reminder.
	 * @tags workspaces
	 * @name PostWorkspaceTrackReminders
	 * @summary TrackReminders
	 * @request POST:/workspaces/{workspace_id}/track_reminders
	 * @secure
	 */
	export namespace PostWorkspaceTrackReminders {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RemindersPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTrackReminder;
	}

	/**
	 * @description Updates a workspace tracking reminder.
	 * @tags workspaces
	 * @name PutWorkspaceTrackReminder
	 * @summary TrackReminder
	 * @request PUT:/workspaces/{workspace_id}/track_reminders/{reminder_id}
	 * @secure
	 */
	export namespace PutWorkspaceTrackReminder {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Reminder ID. */
			reminderId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = RemindersPayload;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsTrackReminder;
	}

	/**
	 * @description Deletes a workspace tracking reminder.
	 * @tags workspaces
	 * @name DeleteWorkspaceTrackReminder
	 * @summary TrackReminder
	 * @request DELETE:/workspaces/{workspace_id}/track_reminders/{reminder_id}
	 * @secure
	 */
	export namespace DeleteWorkspaceTrackReminder {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Reminder ID. */
			reminderId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List all users for a given workspace.
	 * @tags users, workspaces
	 * @name GetWorkspaceUsers
	 * @summary Get workspace users
	 * @request GET:/workspaces/{workspace_id}/users
	 * @secure
	 */
	export namespace GetWorkspaceUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** Exclude deleted records in the response */
			exclude_deleted?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsSimpleWorkspaceUser[];
	}

	/**
	 * @description Update the data for a user in a given workspace.
	 * @tags users, workspaces
	 * @name PutWorkspaceUsers
	 * @summary Update workspace user
	 * @request PUT:/workspaces/{workspace_id}/users/{user_id}
	 * @secure
	 */
	export namespace PutWorkspaceUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the user */
			userId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description List all workspace_users for a given workspace.
	 * @tags users
	 * @name GetWorkspaceWorkspaceUsers
	 * @summary Get workspace workspace-users
	 * @request GET:/workspaces/{workspace_id}/workspace_users
	 * @secure
	 */
	export namespace GetWorkspaceWorkspaceUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
		};
		export type RequestQuery = {
			/** If true, includes indirect users (i.e. users assigned via group) to workspace user list */
			includeIndirect: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ModelsWorkspaceUser[];
	}

	/**
	 * @description Update the data for a workspace_user in a given workspace.
	 * @tags users, workspaces
	 * @name PutWorkspaceWorkspaceUsers
	 * @summary Update workspace-user
	 * @request PUT:/workspaces/{workspace_id}/workspace_users/{workspace_user_id}
	 * @secure
	 */
	export namespace PutWorkspaceWorkspaceUsers {
		export type RequestParams = {
			/** Numeric ID of the workspace */
			workspaceId: number;
			/** Numeric ID of the workspace user */
			workspaceUserId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = UserPayload;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}

	/**
	 * @description Removes user from workspace
	 * @tags users, workspaces
	 * @name DeleteWorkspaceUser
	 * @summary Delete workspace user
	 * @request DELETE:/workspaces/{workspace_id}/workspace_users/{workspace_user_id}
	 */
	export namespace DeleteWorkspaceUser {
		export type RequestParams = {
			/** Numeric ID of the workspace. */
			workspaceId: number;
			/** Numeric ID of the workspace user. */
			workspaceUserId: number;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}
}
