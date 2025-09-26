# Changelog

This file contains a summary of all significant updates and improvements to the project.

## [0.0.71] - 2025-09-29

### Added

- Added `DndTemplateField` component and corresponding story.

## [0.0.70] - 2025-09-28

### Refactor

- Updated `ColorPicker` Component to Wrap the Presets to prevent overflow. Updated GlobalPresets related props based on new Divi Structure.

## [0.0.69] - 2025-09-28

### Refactor

- Added `aspectRatio` prop to `Image` component and updated its styling

## [0.0.68] - 2025-09-28

### Refactor

- Added `BlogPost` and `IntroCard` Components Images with default height and widths

## [0.0.67] - 2025-09-25

### Refactor

- `AppLayout` Component to have default `height` as `auto` and minheight as `calc(100vh - 92px)`

## [0.0.66] - 2025-09-24

### Refactor

- add skeleton loading state to `Image` component

## [0.0.65] - 2025-09-23

### Added

-Added New `BackButton` component to Library

## [0.0.64] - 2025-09-20

### Refactor

- Updated `Toggle` Component Styling to Override Default Wordpress Styling.

## [0.0.63] - 2025-09-11

### Refactor

- Added License Alert on `OverviewPage` component with control props(`showLicenseAlert`,`onLicenseAlertDismiss`)
- updated `TextLink` Component Styling.

## [0.0.62] - 2025-09-05

### Refactor

- updated `ColorPicker` and `CustomColorPicker` to use `popupDirection` prop to control the direction of popup.

## [0.0.61] - 2025-09-03

### Refactor

- updated `featureRequestPage` to use translation function in info alert

## [0.0.60] - 2025-09-02

### Refactor

- added infoAlert with `showInfoAlert` prop in featureRequestPage and Update `Title` and `Description`

## [0.0.59] - 2025-08-22

### Chore

- Added Changlog to `Storbook`

### Feature

- `PacAboutPage`: add FluentlyWP logo and description to the About page

## [0.0.58] - 2025-08-20

### Refactor

- Adding Transition Effects to Sidebar Tabs and Dropdown Menus

## [0.0.57] - 2025-08-20

### Refactor

- refactor `LicensePage` component for better error handling and code clarity

## [0.0.56] - 2025-08-18

### Refactor

-update `TextStyle` component to accept `className` and `style` props for better customization

## [0.0.55] - 2025-08-18

### Refactor

- Refactor `Toggle` component structure and update styles for improved layout
- Added support for `style` and `className` props in the `ComboInput`, `ColorPicker`, `Select` component
- Updated `Link` and `Icon` for LearnMore Button in `LicensePage` Component

## [0.0.54] - 2025-08-16

### Refactor

- Applied `!important` to CSS properties in the `Toggle` component
- Added support for `style` and `className` props in the `Toggle` component

## [0.0.53] - 2025-08-15

### Refactor

- Added Client's Info in Review Card in `OverviewPage` Component
- Updated the Description `Divi Custom Fields Helper` plugin `PacAboutPage`

## [0.0.52] - 2025-08-15

### Refactor

- Made `PacAboutPage` Full Heighted to avoid Sidebar or content area scroll
- Fixed `Toggle` Button UI- Layout Shifting on Screen Zoom
- Added Leave a review card on `OverviewPage` Plugin Overview section

## [0.0.51] - 2025-08-13

### Refactor

- Add Height Prop to `AppLayout` Component
- Update `LicensePage` Component to add Relink License Button and Description Text.
- Refactor `Plugin Card` Component to handle API / Network Error with Alert
- added docsLink prop to `LicensePage` component and updated link reference in error alert for troubleshooting doc

## [0.0.50] - 2025-08-08

### Refactor

- Update Icon of Beta Notice in Plugin Overview Section of `OverviewPage`
- Refactor `Alert` Component to Override Default Icon for each alert variant if Custom Icon is Specified.
- Updated Default Icon of `Alert` for variant type of `Error` to `StopIcon`.
- Added Shadow Color (based on Nelson Feedback) to `AppLayout` Component to distinguish from wordpress default background.

### Added

- Added New Icon `StopIcon` to Library
- Added New Shadow Color Variable i.e.`pac-upui-app-shadow-color`

## [0.0.49] - 2025-08-05

### Refactor

- Minification of Published Package

## [0.0.48] - 2025-08-05

### Refactor

- Updated `PacAboutPage` props and state management and added `loaders` on activate plugin buttons for better UX

## [0.0.47] - 2025-08-04

### Refactor

- Add beta notice to `OverviewPage` and update styles in `PluginSelector, Input , CodeEditor`.

## [0.0.46] - 2025-08-01

### Fixed

- Removed `ColorPicker` Console Logs

## [0.0.45] - 2025-07-31

### Fixed

- Correct plugin ID in `PluginSelector` and `MainHeader` stories.
- Refactor: code structure for improved readability and maintainability
- update active button color in `TextStyle` component for better visibility
- Alpha value implemented in Color Picker / Improved UI for visibility at opacity < 0.33

## [0.0.44] - 2025-07-31

### Fixed

- Default Presets from Color Picker Canvas are Removed.
- Fixed Border Styling in `DndColorField` Component.
- Updated `Select` Component: new prop `textTransform` is added
- `ComboInput` styling updated

### Added

- Created `DndReplaceField` Component
- Added Search Feature in `Select` Dropdown with `enableSearch`Prop, `searchPlaceholder` Prop.
- Added `displayValue` prop to Select Items to override default label to be displayed.
- Added `CodeEditor` Component

## [0.0.43] - 2025-07-28

### Refactored

- `PACAboutPage` component to receive new props `activepluginId`, `managePlugin`
- `IntroCard` inside ``PACAboutPage` is made scrollable when screen height reduces
- Added Static Logos to `Our Wordpress Plugin ` Section in `PACAboutPage` Component
- Added Translations along with `textDomain` props to `PACAboutPage` Component
- `AppLayout` component to have padding of 30px on all side but left side with 10px;
- `Applayout` component height updated for responsivness

## [0.0.42] - 2025-07-25

### Added

- `FileInput` component to browse and select file
- `TextStyle` component to choose the style of Text
- `TextTitleIcon` icon component

### Refactored

- Added Border around white color sample in `ColorPicker` Component
- Fixed Alpha Slider
- `OverviewPage` to receive props for plugin specific resources `docLink`,`supportLink`,`communityLink`
- `OverviewPage` to receive `pluginDescription` prop and modified `pluginLogo` to be type of string | React.ElementType
- Update "Find License Key" Account Links in `LicensePage` Component
- Added Hover Effects on `Tabs/Buttons/Links`

## [0.0.41] - 2025-07-23

### Updated

- exported `SortableList`, `SortableItem`, `SortableDragHandle`, `SortableItemDeleteAction` Components

## [0.0.40] - 2025-07-21

## Refactor: Responsive Grid Component and Layout Updates

### Grid Component

- Refactored to support responsive column configurations via the `columns` prop.
- Accepts a `number` (default: `2`) or a responsive object:  
  `{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number }`
- Added support for CSS variables and media query-based class application.
- Introduced new CSS module rules to handle responsive grid columns.

### PAC About Page

- Updated layout to use the new responsive `Grid` component.
- Improved responsiveness across screen sizes (mobile → desktop).

### PAC Overview Page

- Updated layout to use the new responsive `Grid` layout system.
- Enhanced grid responsiveness for plugin cards and content blocks.

### Checkbox

- `Checkbox` Input and Check Mark Styling

## [0.0.39] - 2025-07-18

### Added

- `LicensePage` component with essential translation / api request props
- `OverviewPage` component with essential translation / api request props
- `ChangelogPage` component with essential translation / api request props
- `PacAboutPage` component with essential translation / api request props

## [0.0.38] - 2025-07-16

### Refactored

- Updated the output Format of `CustomColorPicker` pallete on selection of custom color
- Fix Styling (`min-height` and `line-height` ) to Prevent Overriding by wordpress defaults
- Replaced axios with fetch api in `FeatureRequestPage` component to avoid frontend side error for node - only modules.

## [0.0.37] - 2025-07-16

### Refactored

- Updated the Format of `ColorPicker` globalPresets Prop
- Updated the Picker Icon Based on Saved/Global Color Selection

### Added

- `FeatureRequestPage` component with essential translation / api request props

## [0.0.36] - 2025-07-09

### Refactored

- Reduce the Width of Links used in `PluginCard` and `IntroCard` Components to avoid blank area to be clickable

## [0.0.35] - 2025-07-08

### Refactored

- `MainHeader` Avatar to show "Profile" as tooltip

## [0.0.34] - 2025-07-08

### Refactored

- `MainHeader` Avatar to show username as tooltip , also Renamed userInitials props to userName

## [0.0.33] - 2025-07-08

### Refactored

- `Loader` component accepts variant props as primary that is circular and secondary that is square shaped
- `MainHeader` component to accept plugins props as string and array and userAvatar prop

## [0.0.32] - 2025-07-08

### Added

- exported `PACLogo` component

## [0.0.31] - 2025-07-08

### Refactored

- Spacing Variables for Sidebar Width, Padding
- Added `pacLink`, `diviLink`, `isloading` Props to `PluginCard`
- Added Box Shadow none to `Link` on Focus
- Updated `DiviTimerPro` Broken SVG

## [0.0.30] - 2025-07-08

### Added

- Exported Missing Plugins Icons : `DiviTimerProIcon`, `DiviTabsMaker`

## [0.0.29] - 2025-07-08

### Refactored

- Removed maxwidth from `PluginCard` Component.

### Added

- `DiviDynamicHelperIcon` Component

## [0.0.28] - 2025-07-08

### Refactored

- Renamed `WelcomeCard` to `PluginCard` Component of type status and info.
- `Tooltip` background color from blue to green-300
- Renamed `DiviResponsiveHelper` to `DiviResponsiveHelperIcon`

### Added

- `IntroCard` Component for Main Page

## [0.0.27] - 2025-07-04

### Updated

- `Alert` Component to receive dismissable and action button related Props.

## [0.0.26] - 2025-07-03

### Icon Deleted

- `CodeIcon`, `NumberedIcon`, `ListIcon`

### Icon Renames

- `DragIcon` → `MenuIcon`
- `DiviLibraryIcon` → `LibraryIcon`
- `StylesFilterIcon` → `FilterIcon`
- `MediaIcon` → `ImageIcon`
- `PostTypeIcon` → `PinIcon`
- `DeleteIcon` → `TrashIcon`
- `TrashIcon` → `CloseCircleIcon`
- `MaintenanceModeIcon` → `PauseIcon`
- `ResolveIcon` → `CheckCircleIcon`
- `VisualBuilderIcon` → `EyeIcon`
- `MaintenanceCloneIcon` → `MaintenanceConeIcon`
- `UpsellsIcon` → `DashboardCustomize`

## Icons Added

- `DragIcon`
- `HighlightIcon`
- `ImageCheckIcon`
- `ImageFavouriteIcon`
- `LocationIcon`
- `MeasurementIcon`
- `PluginIcon`
- `ReplaceIcon`
- `SpamIcon`
- `TooltipIcon`

## [0.0.25] - 2025-07-02

### Added

- `Loader` Component for Loading UI

## [0.0.24] - 2025-07-02

### Bugfix

- Other Props Passed to Button

## [0.0.23] - 2025-07-02

### Refactored

- Style Attribute to Button Props

## [0.0.22] - 2025-07-01

### Refactored

- Global Variables for Spacing
- Button Styling to remove outline and boxshadow

## [0.0.21] - 2025-07-01

### Refactored

- Global CSS to support dark theme
- Components to use colors variable defined globally to switch dynamically between light and dark mode

## [0.0.20] - 2025-06-30

### Added

- `DndLinkField`,`DndModulePreset`, `MainParentLink`, `TemplateAssignmentField`

### Refactored

- `Select`,`BlogPostCard`,`Button`,`Image`

### Fixed

## [0.0.19] - 2025-06-29

### Refactored

- Refactored these component based on developers feedback `Avatar`,`Main Header`,`Sidebar`,`FeatureCard`,`BlogPostCard`,`PluginSelector`,`AppLayout`

## [0.0.18] - 2025-06-25

### Refactored

- `Button` Link Mode to have override any external css on text color
- `BlogPostCard` Image to have css of object fit as default i.e. fill
- `FilledIcon` To receive optinonal rounded boolean to enable square or oval filled Icon

## [0.0.17] - 2025-06-25

### Refactored

- `Greeting` Component to reveive title, message, avatar image url

## [0.0.16] - 2025-06-25

### Added

- `DndColorField` to choose the color and assign appropriate label

### Refactored

- `Alert` component to receive icon prop for a renamed type "light"

## [0.0.15] - 2025-06-23

### Changed

- `TextLink` Component to receive color prop for custom color specifiaction

## [0.0.14] - 2025-06-23

### Added

- `TextLink` Component to be used for external Links

## [0.0.13] - 2025-06-23

### Changed

- Downgraded react and react-dom to 18.0.0 to support Existing Plugin Requirements

## [0.0.12] - 2025-06-23

### Changed

- Updated rollup config file to fix import error in plugin environment

## [0.0.11] - 2025-06-21

### Fixed

- Fixed Circular Dependency Bug in BlogPost Imports
- Updated App Layout Component With Spacing

## [0.0.10] - 2025-06-20

### Added

- `App`,`Main`,`Content`: Layouts -`Section` Component -`BlogPostCard` Component -`Image` Component

## [0.0.9] - 2025-06-18

### Fixed

- Exported all new components from v0.0.8 which were missing from the exports.

### Changed

- Updated `Modal` component to support Tabs feature.

## [0.0.8] - 2025-06-18

### Added

- **Dashboard Components:**

  - `Header`: Main dashboard header with title and actions.
  - `SubHeader`: Secondary header for dashboard sections.
  - `GreetingCard`: Personalized greeting card for users.
  - `WelcomeCard`: Welcome message card for new users.
  - `FeatureCard`: Card component to highlight dashboard features.

- **UI Components:**

  - `Avatar`: User avatar component with image and fallback support.
  - `Tooltip`: Tooltip component for displaying contextual information.
  - `MenuItem`: Menu item component for navigation and dropdown menus.
  - `Grid`: Responsive grid layout container for arranging child components.
  - `Stack`: Vertical or horizontal stack container for spacing and alignment.
  - `Container`: Layout container for constraining content width and centering.
  - `CustomColorPicker`: Custom color picker component for selecting and previewing colors.
  - `Modal`: Dialog/modal component for displaying overlay content and dialogs.

- **Icons:**
  - `SidebarChevronRightIcon`: Chevron icon for sidebar navigation.
  - `CloseDropdownIcon`: Icon for closing dropdown menus.
  - **Plugin Icons:**
    - Added icons for all plugins, including:
      - Divi Responsive Helper
      - Divi Taxonomy Helper
      - Plugin3
      - Divi Table
      - Divi Calendar
      - Divi Contact
      - Divi Assistant
      - Divi Search Helper
      - Divi Carousel Maker
      - Divi Social Sharing Buttons

## [0.0.7] - 2025-06-14

### Added

- **Form Components:**
  - `Checkbox`: Accessible, styled checkbox with label and disabled state.
  - `Toggle`: Switch-style toggle with label and disabled state.
  - `Select`: Custom select dropdown.
  - `ComboInput`: Combined input and select for advanced form use.
  - `ImagePicker`: File/image picker with preview, error handling, and removal.
- **Data Display Components:**
  - `Badge`: Status badge with variants (`active`, `inactive`, `notinstalled`, `latestversion`).
  - `ImagePlaceholder`: SVG placeholder with square and blob variants.
- **Feedback Components:**
  - `Alert`: Alert/notification with icon, title, description, and variants (`success`, `error`, `info`, `suggestion`).
- **Navigation Components:**
  - `Tab`: Tab button with selection state and handler.
- **Storybook Stories:**
  - Added/updated stories for all new components and their variants.
- **CSS Modules:**
  - Added CSS modules for all new components, using PAC color and typography variables.

### Changed

- Updated all new and existing components to use PAC color/typography variables for visual consistency.
- Updated `Button` type definitions to allow `ReactNode` or `ElementType` for icons.
- Updated `global.css` with new icon and font utility classes.
- Updated `rollup.config.mjs` to mark React/ReactDOM as externals to prevent multiple React instances.
- Updated `package.json` version and `peerDependencies` for React.
- Ensured all new/modified components are exported from `index.ts`.

### Fixed

- Addressed and fixed all lint and type errors in stories and components.
- Improved error handling and fallback UI in `ImagePicker`.
- Fixed visual and accessibility issues in `Checkbox` and `Toggle`.
- Ensured all components are accessible and visually consistent.

## [0.0.6] - 2025-06-14

- Fixed RollConfig for exlude bundling react/react-dom during build to avoid Errors while using the library

## [0.0.5] - 2025-06-14

### Added

- Introduced `Select` and `Checkbox` form components
- Added `Card` and `Modal` UI components
- Implemented dark mode support for all components
- Added accessibility improvements across form elements

### Changed

- Updated `Button` component to support loading and disabled states
- Improved documentation for all components

### Fixed

- Fixed layout issues in `FormField` when used with validation messages
- Resolved minor visual bugs in `Input` and `TextArea` components

## [0.0.4] - 2025-06-13

### Added

- Added `Input`, `TextArea`, and `FormField` components
- Added typography components: `Label`, `Heading`, and `Text`

## [0.0.3] - 2025-06-10

### Added

- Added icons: `CustomCodeIcon`, `CustomFieldsIcon`, `DesktopIcon`, `DiviLibraryIcon`, `DocumentationIcon`, `DownloadIcon`, `DragIcon`, `EditIcon`, `EmailIcon`, `FallbackIcon`, `FaqIcon`, `FeatureRequestIcon`, `FontIcon`, `FormsIcon`, `GlossaryIcon`, `GroupsIcon`, `HeadingIcon`, `HealthIcon`, `HideIcon`, `HomeIcon`, `ImportExportIcon`, `IncrementIcon`, `InfoIcon`, `InterfaceIcon`, `ItalicIcon`, `KeyIcon`, `LearningIcon`, `LinkIcon`, `ListIcon`, `LoginIcon`, `MaintenanceCloneIcon`, `MaintenanceIcon`, `MaintenanceModeIcon`, `MediaIcon`, `MediaLibraryIcon`, `ModulesIcon`, `NotesIcon`, `NotificationsIcon`, `NumberedIcon`, `NumberListIcon`, `OwnersManualIcon`, `ParagraphIcon`, `PasswordIcon`, `PhasesIcon`, `PhoneIcon`, `PluginListIcon`, `PostTypeIcon`, `PresetsIcon`, `PrintIcon`, `ProductsIcon`, `ReplyIcon`, `ResetIcon`, `ResolveIcon`, `RolesIcon`, `SaveIcon`, `ScrollbarIcon`, `ScrollIcon`, `SearchIcon`, `SettingsIcon`, `ShareIcon`, `StartupIcon`, `StatusIcon`, `StrikethroughIcon`, `StylesFilterIcon`, `SupportIcon`, `TabletIcon`, `TagIcon`, `TemplateIcon`, `TextIcon`, `ToggleIcon`, `TrashIcon`, `TroubleshootingIcon`, `UnderlinedIcon`, `UpdatesIcon`, `UploadIcon`, `UpsellsIcon`, `UsersIcon`, `UtilityIcon`, `VideoIcon`, `VisualBuilderIcon`

## [0.0.2] - 2025-06-10

### Added

- `Button` Component to Package
- `Link` Component to Package
- Added `CHANGELOG.md`
- Added `GIT Repo`

## [0.0.1] - 2025-06-09

### Added

- Initial Setup of PAC - Universal Plugin UI
- Created Required Directory Structure
- Added Configuration Files for Typescript and Rollup
- Setup StoryBook for Components Visualisation prior to publish
- Setup Global CSS Styles for colors and typo-graphy
