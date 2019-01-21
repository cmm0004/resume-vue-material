<template>
    <div class="md-layout">
          <md-content class="md-layout-item md-small-size-100 md-medium-size-50">
            <md-card>
          <md-card-header>
            <h1>Hi, I'm Candice</h1>
          </md-card-header>
          <md-card-content>
            <p>
              I'm a full stack software developer living in Atlanta. Software is
              about constantly learning, adapting to new technologies and
              taking risks on something new.
            </p>
            <p>
              I'm a passionate advocate for better software, I follow the agile methodology
              and understand the fine line that seperates high test coverage, and writing meaningful tests.
              I actively engage my teammates in code reviews, in exploring new technologies and sharing my knowledge with new developers.
            </p>
            <p>
              I love to talk about my work and love to have work that I want to talk about. Lately I've been
              helping eVestment build out a microservice architecture in AWS from an on premisis monolith. I love working
              in an environment where I can constantly learn new things. Recently its been Terraform and ElasticSearch.
            </p>
          </md-card-content>
        </md-card>
      </md-content>
      
   
      <md-content class="md-layout-item md-small-size-100 md-medium-size-50">
        <md-card>
          <md-card-header>
            <div class="md-title stack-title">Skills</div>
          </md-card-header>
          <md-card-content>
            <md-chip
              :class="{'md-primary': selectedSkills === 0}"
              v-for="chip in frontend"
              :key="chip"
            >{{chip}}</md-chip>
            <md-chip
              :class="{'md-primary': selectedSkills === 1}"
              v-for="chip in backend"
              :key="chip"
            >{{chip}}</md-chip>

            <md-chip
              :class="{'md-primary': selectedSkills === 2}"
              v-for="chip in devops"
              :key="chip"
            >{{chip}}</md-chip>
            <md-chip
              :class="{'md-primary': selectedSkills === 3}"
              v-for="chip in softskills"
              :key="chip"
            >{{chip}}</md-chip>
          </md-card-content>

          <md-card-actions md-alignment="space-between">
            <md-button
              @click="selectedSkills = 0"
              :class="{'md-raised md-primary': selectedSkills === 0}"
            >Frontend</md-button>
            <md-button
              @click="selectedSkills = 1"
              :class="{'md-raised md-primary': selectedSkills === 1}"
            >Backend</md-button>
            <md-button
              @click="selectedSkills = 2"
              :class="{'md-raised md-primary': selectedSkills === 2}"
            >Architecture</md-button>
            <md-button
              @click="selectedSkills = 3"
              :class="{'md-raised md-primary': selectedSkills === 3}"
            >People</md-button>
          </md-card-actions>
        </md-card>
      </md-content>

      <md-content class="md-layout-item md-small-size-100 md-medium-size-50">
            <md-card>
          <md-card-header class="md-title">
            Current Projects
          </md-card-header>
          <md-card-content>
            <p>
              Working on my favorite hobby language: Clojure
            </p>
            <p>
              I'm a passionate advocate for better software, I follow the agile methodology
              and understand the fine line that seperates high test coverage, and writing meaningful tests.
              I actively engage my teammates in code reviews, in exploring new technologies and sharing my knowledge with new developers.
            </p>
            <p>
              I love to talk about my work and love to have work that I want to talk about. Lately I've been
              helping eVestment build out a microservice architecture in AWS from an on premisis monolith. I love working
              in an environment where I can constantly learn new things. Recently its been Terraform and ElasticSearch.
            </p>
          </md-card-content>
        </md-card>
      </md-content>
       
    </div>
</template>
  

<script>
export default {
  name: "About",
  data: () => ({
    selectedSkills: 0,
    frontend: [
      "Vue.js",
      "knockout.js",
      "Ext.js",
      "Bootstrap",
      "Material",
      "MVVM",
      "MVC",
      "es6",
      "postman",
      "scss",
      "less",
      "Restful APIs",
      "HTML",
      "json",
      "XML"
    ],
    backend: [
      "C#",
      "dotnetcore",
      "VB.Net",
      "powershell",
      "Linq",
      "elasticsearch",
      "flatbuffers",
      "protobufs",
      "redis",
      "Moq",
      "async/await",
      "MSSQL",
      "entity ORM",
      "IOC"
    ],
    devops: [
      "terraform",
      "docker",
      "amazon web services",
      "publisher/subscription",
      "ecs",
      "lambda",
      "dynamodb",
      "git",
      "teamcity"
    ],
    softskills: [
      "mentoring",
      "code reviews",
      "software design",
      "infrastructure design",
      "agile",
      "12 factor app",
      "public speaking",
      "radical candor",
      "documentation"
    ]
  })
};
</script>

<style lang="scss" scoped>
.about {
  min-height: 100%;
}
.md-chip {
  margin-bottom: 0.5em;
}
.md-content {
   margin-bottom: 1em;
}
</style>
