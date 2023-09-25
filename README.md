# SUSC 공식 웹사이트

## SUSC 학교 등록 방법

1. SUSC의 운영진에게 학교 등록을 요청합니다.
2. 운영진이 학교 등록을 승인하면, 아래의 절차를 진행합니다.

### 1. 학교 데이터를 입력합니다.

1. `public/images/univ/` 폴더에 `학교 약자` 폴더를 생성합니다.
2. `학교 약자` 폴더에 학교 대표사잔으로 사용될 `학교명.jpeg` 파일을 생성합니다.
3. `학교 약자` 폴더 안에 `org` 폴더를 생성하여 학교 구성원들의 사진을 업로드합니다.
4. `src/content/` 폴더에 `학교 이름.mdx` 파일을 생성합니다.
5. 아래의 형식에 맞춰 파일을 작성합니다.

```mdx
---
univName: '학교이름'
univImg: '/images/univ/학교약자/학교명.jpeg'
univDescription: '학교 설명'
leadName: '리드이름'
viceLeadName: ['부대표이름']
clubList: ['동아리 명']
---


## 학교명 입니다.

설명

import UnivOrgCard from '@components/UnivOrgCard.astro';


<section class="bg-white dark:bg-gray-900">
	<div class="container px-6 py-10 mx-auto">
		<h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Organizers</h1>

		<p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
				학교명에서는 원활한 SUSC활동을 위해 아래의 구성원들이 고생해주고 있습니다.
		</p>
		<div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
			<UnivOrgCard 
				orgImg="/images/univ/khu/org/.jpeg"
				orgName="이름"
				role="동아리명 Lead"
				github="깃헙주소"
				linkedIn="링크드인"
				instagram="인스타"
			/>
		</div>
	</div>
</section>
```