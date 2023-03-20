<script lang="ts">
import Biography from './Biography.svelte'
import WorkExperience from './WorkExperience.svelte'

import BulletList from './BulletList.svelte'
import SocialMedia from './SocialMedia.svelte'

import PersonalPhoto from './PersonalPhoto.svelte'

import * as texts from '../../lib/texts/texts'


</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="cv-wrapper">
    <div id="cv-flex-container">
      <div id="column1">
        <Biography title={texts.biographyText.name} text={texts.biographyText.text}></Biography>
        <WorkExperience title={texts.workExperience.title} jobs={texts.workExperience.jobs}></WorkExperience>
      </div>
      <div id="column2">
        <div id="side-bar-container">
          <PersonalPhoto href="/images/photo.png" alt={"An example image"}></PersonalPhoto>
          <SocialMedia mediaLinks={texts.socialMediaLinks.mediaLink}></SocialMedia>
          <BulletList title={texts.hardSkills.title} items={texts.hardSkills.skills}></BulletList>
          <BulletList title={texts.softSkills.title} items={texts.softSkills.skills}></BulletList>
          <BulletList title={texts.languages.title} items={texts.languages.languages}></BulletList>
        </div>
      </div>
    </div>
  </div>

<style>
.cv-wrapper{
	background-color: white;
	margin: 0 auto;
	padding: 0px 0px 0px 0px;
	width: 800px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	margin-top: 25px;
	margin-bottom: 25px;
}
#cv-flex-container{
	display: flex;
		flex-direction: row;
		padding:10px;
}
#column1{
	display: block;
	background-color: white;
	width: 600px;
}

#column2{
	display: block;
	background-color: white;
	width: 200px;
}
#side-bar-container{
	margin:0px 10px 0px 10px;
}
</style>